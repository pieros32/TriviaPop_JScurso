let nivelActual = "";
let preguntaActual = 0;
let puntaje = 0;
let respondida = false;

// Nombres visibles para cada nivel
const nombresNivel = {
    facil: "Fácil",
    intermedio: "Intermedio",
    experto: "Experto"
};

const preguntas = {
    facil: [
        {
            tipo: "Personaje",
            pregunta: "¿Cómo se llama el protagonista principal de The Walking Dead?",
            opciones: [
                "Rick Grimes",
                "Shane Walsh",
                "Daryl Dixon",
                "Glenn Rhee"
            ],
            respuesta: "Rick Grimes",
            imagen: "imagenes/rick.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Cuál es el nombre del hermano mayor de Daryl Dixon?",
            opciones: [
                "Merle Dixon",
                "Hershel Greene",
                "Dale Horvath",
                "T-Dog"
            ],
            respuesta: "Merle Dixon",
            imagen: "imagenes/daryl.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Cómo se llama la esposa de Rick Grimes?",
            opciones: [
                "Lori Grimes",
                "Carol Peletier",
                "Maggie Greene",
                "Andrea Harrison"
            ],
            respuesta: "Lori Grimes",
            imagen: "imagenes/rick.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Cuál es el nombre del hijo de Rick Grimes?",
            opciones: [
                "Carl Grimes",
                "Judith Grimes",
                "Duane Jones",
                "Ron Anderson"
            ],
            respuesta: "Carl Grimes",
            imagen: "imagenes/rick.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿En qué ciudad se encuentra el hospital donde Rick despierta al comienzo de la serie?",
            opciones: [
                "Atlanta",
                "Woodbury",
                "Alexandria",
                "Washington D.C."
            ],
            respuesta: "Atlanta",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Dónde se encontraba el Centro para el Control de Enfermedades que visita el grupo al final de la primera temporada?",
            opciones: [
                "Atlanta",
                "Richmond",
                "Savannah",
                "Woodbury"
            ],
            respuesta: "Atlanta",
            imagen: "imagenes/cdc.jpg"
        },
        {
            tipo: "Profesión",
            pregunta: "Antes del apocalipsis, ¿qué profesión tenía Rick Grimes?",
            opciones: [
                "Sheriff",
                "Médico",
                "Granjero",
                "Profesor"
            ],
            respuesta: "Sheriff",
            imagen: "imagenes/rick.jpg"
        },
        {
            tipo: "Profesión",
            pregunta: "¿Qué profesión tenía Hershel Greene antes del apocalipsis?",
            opciones: [
                "Veterinario",
                "Médico",
                "Abogado",
                "Policía"
            ],
            respuesta: "Veterinario",
            imagen: "imagenes/hershel.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Cómo se llamaba el médico que trabajaba en el CDC?",
            opciones: [
                "Edwin Jenner",
                "Hershel Greene",
                "Dale Horvath",
                "Milton Mamet"
            ],
            respuesta: "Edwin Jenner",
            imagen: "imagenes/cdc.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿En qué lugar vivía la familia Greene antes de que el grupo de Rick llegara allí?",
            opciones: [
                "La granja de Hershel",
                "La prisión",
                "Woodbury",
                "Alexandria"
            ],
            respuesta: "La granja de Hershel",
            imagen: "imagenes/granja.jpg"
        }
    ],

    intermedio: [
        {
            tipo: "Personaje",
            pregunta: "¿Quién fue el mejor amigo de Rick antes del apocalipsis?",
            opciones: [
                "Shane Walsh",
                "Daryl Dixon",
                "Merle Dixon",
                "Glenn Rhee"
            ],
            respuesta: "Shane Walsh",
            imagen: "imagenes/shane.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿A qué lugar quería dirigirse Shane durante la segunda temporada?",
            opciones: [
                "Fort Benning",
                "Woodbury",
                "Alexandria",
                "La prisión"
            ],
            respuesta: "Fort Benning",
            imagen: "imagenes/shane.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿En qué lugar se refugió el grupo de Rick durante gran parte de la segunda temporada?",
            opciones: [
                "La granja de Hershel",
                "El CDC",
                "Woodbury",
                "Alexandria"
            ],
            respuesta: "La granja de Hershel",
            imagen: "imagenes/granja.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Cómo se llamaba el dueño de la granja donde el grupo se refugió durante la segunda temporada?",
            opciones: [
                "Hershel Greene",
                "Otis",
                "Shane Walsh",
                "Dale Horvath"
            ],
            respuesta: "Hershel Greene",
            imagen: "imagenes/hershel.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Quién era conocido por utilizar principalmente una ballesta como arma?",
            opciones: [
                "Daryl Dixon",
                "Rick Grimes",
                "Glenn Rhee",
                "Shane Walsh"
            ],
            respuesta: "Daryl Dixon",
            imagen: "imagenes/daryl.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Cómo se llamaba la comunidad gobernada por el personaje conocido como el Gobernador?",
            opciones: [
                "Woodbury",
                "Alexandria",
                "Hilltop",
                "Oceanside"
            ],
            respuesta: "Woodbury",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Quién era la hija de Hershel Greene que posteriormente se convirtió en pareja de Glenn?",
            opciones: [
                "Maggie Greene",
                "Beth Greene",
                "Andrea Harrison",
                "Lori Grimes"
            ],
            respuesta: "Maggie Greene",
            imagen: "imagenes/hershel.jpg"
        },
        {
            tipo: "Profesión",
            pregunta: "¿Qué profesión ejercía Hershel antes del apocalipsis?",
            opciones: [
                "Veterinario",
                "Sheriff",
                "Ingeniero",
                "Periodista"
            ],
            respuesta: "Veterinario",
            imagen: "imagenes/hershel.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Cuál de estos lugares fue utilizado como refugio por el grupo de Rick después de abandonar la granja de Hershel?",
            opciones: [
                "La prisión",
                "Oceanside",
                "El Reino",
                "Terminus"
            ],
            respuesta: "La prisión",
            imagen: "imagenes/granja.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Quién era conocido por su habilidad para rastrear personas y moverse por el bosque?",
            opciones: [
                "Daryl Dixon",
                "Dale Horvath",
                "Hershel Greene",
                "Milton Mamet"
            ],
            respuesta: "Daryl Dixon",
            imagen: "imagenes/daryl.jpg"
        }
    ],

    experto: [
        {
            tipo: "Lugar",
            pregunta: "¿Cuál de estos lugares fue gobernado por el personaje conocido como el Gobernador?",
            opciones: [
                "Woodbury",
                "Hilltop",
                "Alexandria",
                "Oceanside"
            ],
            respuesta: "Woodbury",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Qué personaje fue el líder de Woodbury y fue conocido principalmente como el Gobernador?",
            opciones: [
                "Philip Blake",
                "Negan Smith",
                "Simon",
                "Lance Hornsby"
            ],
            respuesta: "Philip Blake",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Cuál de estos lugares fue conocido como una comunidad agrícola que posteriormente tuvo relación con el grupo de Rick?",
            opciones: [
                "Hilltop",
                "The Kingdom",
                "Oceanside",
                "Woodbury"
            ],
            respuesta: "Hilltop",
            imagen: "imagenes/granja.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Cuál de estas comunidades fue fundada como un refugio amurallado y organizado, distinto a Woodbury o la prisión?",
            opciones: [
                "Alexandria",
                "Terminus",
                "Woodbury",
                "Fort Benning"
            ],
            respuesta: "Alexandria",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Quién era el encargado del CDC cuando Rick y su grupo llegaron al edificio?",
            opciones: [
                "Edwin Jenner",
                "Hershel Greene",
                "Dale Horvath",
                "Shane Walsh"
            ],
            respuesta: "Edwin Jenner",
            imagen: "imagenes/cdc.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Cómo se llamaba el lugar que se presentaba como un refugio seguro para sobrevivientes, pero escondía una situación peligrosa?",
            opciones: [
                "Terminus",
                "Hilltop",
                "Alexandria",
                "El Reino"
            ],
            respuesta: "Terminus",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Profesión",
            pregunta: "¿Qué profesión decía tener Eugene Porter antes del apocalipsis?",
            opciones: [
                "Científico",
                "Sheriff",
                "Veterinario",
                "Abogado"
            ],
            respuesta: "Científico",
            imagen: "imagenes/cdc.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Qué personaje se convirtió en el líder de los Salvadores?",
            opciones: [
                "Negan",
                "Hershel",
                "Tyreese",
                "Dale"
            ],
            respuesta: "Negan",
            imagen: "imagenes/rick.jpg"
        },
        {
            tipo: "Lugar",
            pregunta: "¿Cómo se llamaba la comunidad liderada por Ezekiel, relacionada con un tigre llamado Shiva?",
            opciones: [
                "El Reino",
                "Hilltop",
                "Woodbury",
                "Oceanside"
            ],
            respuesta: "El Reino",
            imagen: "imagenes/atlanta.jpg"
        },
        {
            tipo: "Personaje",
            pregunta: "¿Quién ayudó a Rick poco después de que saliera del hospital y lo llevó a conocer a su hijo Duane?",
            opciones: [
                "Morgan Jones",
                "Hershel Greene",
                "Ezekiel",
                "Gabriel Stokes"
            ],
            respuesta: "Morgan Jones",
            imagen: "imagenes/rick.jpg"
        }
    ]
};

function seleccionarNivel(nivel) {
    const franquiciaSeleccionada = document.getElementById("selectorFranquicia").value;
    
    // Si la franquicia no es TWD, no inicia ningún nivel
    if (franquiciaSeleccionada !== "the-walking-dead") {
        return;
    }

    nivelActual = nivel;
    preguntaActual = 0;
    puntaje = 0;

    document.querySelectorAll(".btn-nivel").forEach(function(boton) {
        boton.classList.toggle("activo", boton.dataset.nivel === nivel);
    });

    mostrarPregunta();
}

function mostrarPregunta() {
    let pregunta = preguntas[nivelActual][preguntaActual];
    respondida = false;

    document.getElementById("nivelActual").textContent = nombresNivel[nivelActual];
    document.getElementById("numeroPregunta").textContent = `${preguntaActual + 1} / ${preguntas[nivelActual].length}`;
    document.getElementById("puntaje").textContent = `${puntaje} pts`;
    document.getElementById("tipoPregunta").textContent = pregunta.tipo;
    document.getElementById("pregunta").textContent = pregunta.pregunta;
    document.getElementById("imagenPregunta").src = pregunta.imagen;
    document.getElementById("resultado").textContent = "";

    crearOpciones(pregunta);
}

function crearOpciones(pregunta) {
    let contenedor = document.getElementById("opciones");
    contenedor.innerHTML = "";

    let opcionesMezcladas = [...pregunta.opciones];
    opcionesMezcladas.sort(() => Math.random() - 0.5);

    opcionesMezcladas.forEach(function(opcion) {
        let boton = document.createElement("button");
        boton.textContent = opcion;
        boton.className = "opcion-btn";

        boton.onclick = function() {
            comprobarOpcion(boton, opcion);
        };

        contenedor.appendChild(boton);
    });
}

function comprobarOpcion(boton, opcion) {
    if (respondida) {
        return;
    }

    let respuestaCorrecta = preguntas[nivelActual][preguntaActual].respuesta;
    let botones = document.querySelectorAll("#opciones button");

    botones.forEach(function(b) {
        b.disabled = true;
    });

    if (opcion.toLowerCase().trim() === respuestaCorrecta.toLowerCase().trim()) {
        boton.classList.add("correcta");
        puntaje++;
        document.getElementById("resultado").textContent = "¡Respuesta correcta!";
    } else {
        boton.classList.add("incorrecta");

        botones.forEach(function(b) {
            if (b.textContent.toLowerCase().trim() === respuestaCorrecta.toLowerCase().trim()) {
                b.classList.add("correcta");
            }
        });

        document.getElementById("resultado").textContent = `Respuesta incorrecta. La respuesta era ${respuestaCorrecta}`;
    }

    respondida = true;
    document.getElementById("puntaje").textContent = `${puntaje} pts`;
}

function siguientePregunta() {
    if (nivelActual === "") {
        alert("Primero selecciona un nivel.");
        return;
    }

    // Obliga al usuario a responder la pregunta antes de continuar
    if (!respondida) {
        document.getElementById("resultado").textContent = "Debes responder la pregunta actual para continuar.";
        return;
    }

    preguntaActual++;

    if (preguntaActual >= preguntas[nivelActual].length) {
        finalizarTrivia();
        return;
    }

    mostrarPregunta();
}

function finalizarTrivia() {
    let total = preguntas[nivelActual].length;

    document.getElementById("tipoPregunta").textContent = "RESULTADO";
    document.getElementById("pregunta").textContent = `Terminaste el nivel ${nombresNivel[nivelActual]}`;
    document.getElementById("resultado").textContent = `Obtuviste ${puntaje} de ${total} puntos`;
    document.getElementById("opciones").innerHTML = "";
    document.getElementById("numeroPregunta").textContent = `${total} / ${total}`;
}

// Manejador del Selector de Franquicia
document.getElementById("selectorFranquicia").addEventListener("change", function(e) {
    const franquiciaSeleccionada = e.target.value;
    const errorCarga = document.getElementById("errorCarga");

    if (franquiciaSeleccionada === "the-walking-dead") {
        // Oculta el popup/banner de error
        errorCarga.classList.remove("visible");

        // Si ya hay un nivel activo, carga sus preguntas; si no, muestra mensaje de bienvenida
        if (nivelActual !== "") {
            seleccionarNivel(nivelActual);
        } else {
            document.getElementById("pregunta").textContent = "¡Selecciona un nivel para comenzar la trivia!";
            document.getElementById("opciones").innerHTML = "";
            document.getElementById("resultado").textContent = "";
        }
    } else {
        // Muestra el cartel/popup de error de carga para las otras franquicias
        errorCarga.classList.add("visible");

        // Reinicia el estado activo de la interfaz
        nivelActual = "";
        preguntaActual = 0;
        puntaje = 0;

        document.querySelectorAll(".btn-nivel").forEach(function(b) {
            b.classList.remove("activo");
        });

        document.getElementById("nivelActual").textContent = "—";
        document.getElementById("numeroPregunta").textContent = "0 / 0";
        document.getElementById("puntaje").textContent = "0 pts";
        document.getElementById("pregunta").textContent = "Selecciona una franquicia disponible.";
        document.getElementById("opciones").innerHTML = "";
        document.getElementById("resultado").textContent = "";
    }
});