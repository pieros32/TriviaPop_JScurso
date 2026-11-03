import { NIVELES } from "../logic/trivia.js";

const FRANQUICIAS = [
  { valor: "the-walking-dead", nombre: "The Walking Dead" },
  { valor: "breaking-bad", nombre: "Breaking Bad" },
  { valor: "game-of-thrones", nombre: "Game of Thrones" },
  { valor: "stranger-things", nombre: "Stranger Things" },
  { valor: "the-last-of-us", nombre: "The Last of Us" }
];

export default function Configuracion({
  franquicia,
  nivel,
  nombre,
  nombreBloqueado,
  onCambiarNombre,
  onCambiarFranquicia,
  onSeleccionarNivel
}) {
  return (
    <section aria-label="Configuración de la trivia" className="panel-configuracion">
      <div className="grupo-configuracion">
        <label className="etiqueta-configuracion" htmlFor="nombreJugador">
          Tu nombre
        </label>
        <input
          id="nombreJugador"
          type="text"
          maxLength={20}
          placeholder="Escribe tu nombre para jugar"
          value={nombre}
          disabled={nombreBloqueado}
          onChange={(e) => onCambiarNombre(e.target.value)}
        />
      </div>

      <div className="grupo-configuracion">
        <label className="etiqueta-configuracion" htmlFor="selectorFranquicia">
          <svg fill="none" height="15" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" width="15">
            <rect height="20" rx="2.18" ry="2.18" width="20" x="2" y="2" />
            <line x1="7" x2="7" y1="2" y2="22" />
            <line x1="17" x2="17" y1="2" y2="22" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <line x1="2" x2="7" y1="7" y2="7" />
            <line x1="2" x2="7" y1="17" y2="17" />
            <line x1="17" x2="22" y1="17" y2="17" />
            <line x1="17" x2="22" y1="7" y2="7" />
          </svg>
          Selecciona una Franquicia
        </label>
        <div className="contenedor-selector">
          <select
            id="selectorFranquicia"
            value={franquicia}
            onChange={(e) => onCambiarFranquicia(e.target.value)}
          >
            {FRANQUICIAS.map((f) => (
              <option key={f.valor} value={f.valor}>
                {f.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grupo-configuracion">
        <span className="etiqueta-configuracion">
          <svg fill="none" height="15" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" width="15">
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 6 12 12 16 14" />
          </svg>
          Dificultad
        </span>
        <div className="cuadricula-niveles">
          {Object.entries(NIVELES).map(([clave, nombre]) => (
            <button
              key={clave}
              className={`btn-nivel${clave === nivel ? " activo" : ""}`}
              type="button"
              onClick={() => onSeleccionarNivel(clave)}
            >
              {nombre}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
