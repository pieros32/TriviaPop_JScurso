import { NIVELES } from "../logic/trivia.js";

function titulo({ estado, pregunta, disponible }) {
  if (!disponible) return "Selecciona una franquicia disponible.";
  if (estado.terminado) return `Terminaste el nivel ${NIVELES[estado.nivel]}`;
  return pregunta ? pregunta.pregunta : "Selecciona un nivel para comenzar";
}

function claseOpcion(estado, opcion, i) {
  if (estado.respondida && opcion.correcta) return "opcion-btn correcta";
  if (i === estado.seleccionada) return "opcion-btn incorrecta";
  return "opcion-btn";
}

export default function TarjetaTrivia({ estado, pregunta, disponible, onResponder, onSiguiente }) {
  const etiqueta = estado.terminado ? "RESULTADO" : pregunta ? pregunta.tipo : "TRIVIA";

  return (
    <article className="tarjeta-trivia">
      <div className="col-visual-trivia">
        <div className="insignia-categoria" id="tipoPregunta">{etiqueta}</div>
        <div className="marco-imagen">
          <img
            alt="Imagen representativa de la pregunta"
            id="imagenPregunta"
            src={pregunta ? pregunta.imagen : "imagenes/rick.jpg"}
          />
        </div>
      </div>

      <div className="col-contenido-trivia">
        <h2 id="pregunta">{titulo({ estado, pregunta, disponible })}</h2>

        <div id="opciones" role="radiogroup">
          {estado.opciones.map((opcion, i) => (
            <button
              key={opcion.texto}
              className={claseOpcion(estado, opcion, i)}
              disabled={estado.respondida}
              onClick={() => onResponder(i)}
            >
              {opcion.texto}
            </button>
          ))}
        </div>

        <div aria-live="assertive" id="resultado">{estado.mensaje}</div>

        <button id="siguiente" type="button" onClick={onSiguiente}>
          <span>Siguiente Pregunta</span>
          <svg fill="none" height="22" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" width="22">
            <line x1="5" x2="19" y1="12" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </article>
  );
}
