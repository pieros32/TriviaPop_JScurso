import { NIVELES } from "../logic/trivia.js";
import Cronometro from "./Cronometro.jsx";

export default function BarraEstado({ nivel, numero, total, puntaje, inicio, tiempo, activo }) {
  return (
    <div aria-live="polite" className="barra-estado">
      <div className="elemento-estado">
        <span className="etiqueta-estado">Nivel</span>
        <span className="valor-estado" id="nivelActual">{nivel ? NIVELES[nivel] : "—"}</span>
      </div>
      <div className="elemento-estado">
        <span className="etiqueta-estado">Progreso</span>
        <span className="valor-estado" id="numeroPregunta">{numero} / {total}</span>
      </div>
      <div className="elemento-estado">
        <span className="etiqueta-estado">Puntaje</span>
        <span className="valor-estado" id="puntaje">{puntaje} pts</span>
      </div>
      <div className="elemento-estado">
        <span className="etiqueta-estado">Tiempo</span>
        <Cronometro inicio={inicio} tiempo={tiempo} activo={activo} />
      </div>
    </div>
  );
}
