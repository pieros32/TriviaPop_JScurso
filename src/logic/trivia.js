// Lógica pura de la trivia: sin DOM ni estado global, lista para reutilizar en React.

export const NIVELES = {
    facil: "Fácil",
    intermedio: "Intermedio",
    experto: "Experto"
};

// Franquicias que ya tienen preguntas cargadas
export const FRANQUICIAS_DISPONIBLES = ["the-walking-dead"];

// Fisher-Yates: devuelve una copia mezclada de forma uniforme
export function mezclar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Convierte una pregunta cruda en una lista de opciones mezcladas con su marca de correcta
export function prepararOpciones(pregunta) {
    const opciones = pregunta.opciones.map((texto, i) => ({
        texto,
        correcta: i === pregunta.respuesta
    }));
    return mezclar(opciones);
}

export function estadoInicial(franquicia) {
    return {
        franquicia,
        nivel: "",
        indice: 0,
        puntaje: 0,
        opciones: [],
        seleccionada: null,
        respondida: false,
        terminado: false,
        inicio: null,
        tiempo: null,
        mensaje: ""
    };
}

export function franquiciaDisponible(franquicia) {
    return FRANQUICIAS_DISPONIBLES.includes(franquicia);
}

export function iniciarNivel(estado, nivel, preguntas) {
    return {
        ...estadoInicial(estado.franquicia),
        nivel,
        inicio: Date.now(),
        opciones: prepararOpciones(preguntas[nivel][0])
    };
}

export function responder(estado, indiceOpcion) {
    if (estado.respondida || estado.terminado || !estado.nivel) {
        return estado;
    }

    const elegida = estado.opciones[indiceOpcion];
    const correcta = estado.opciones.find((o) => o.correcta);

    return {
        ...estado,
        respondida: true,
        seleccionada: indiceOpcion,
        puntaje: estado.puntaje + (elegida.correcta ? 1 : 0),
        mensaje: elegida.correcta
            ? "¡Respuesta correcta!"
            : `Respuesta incorrecta. La respuesta era ${correcta.texto}`
    };
}

export function siguiente(estado, preguntas) {
    if (estado.terminado) {
        return estado;
    }

    if (!estado.nivel) {
        return { ...estado, mensaje: "Primero selecciona un nivel." };
    }

    // Obliga al usuario a responder la pregunta antes de continuar
    if (!estado.respondida) {
        return { ...estado, mensaje: "Debes responder la pregunta actual para continuar." };
    }

    const lista = preguntas[estado.nivel];
    const indice = estado.indice + 1;

    if (indice >= lista.length) {
        const tiempo = Math.round((Date.now() - estado.inicio) / 1000);
        return {
            ...estado,
            terminado: true,
            tiempo,
            opciones: [],
            seleccionada: null,
            mensaje: `Obtuviste ${estado.puntaje} de ${lista.length} puntos en ${tiempo} s`
        };
    }

    return {
        ...estado,
        indice,
        opciones: prepararOpciones(lista[indice]),
        seleccionada: null,
        respondida: false,
        mensaje: ""
    };
}
