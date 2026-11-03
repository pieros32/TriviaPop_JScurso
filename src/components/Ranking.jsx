import { NIVELES } from "../logic/trivia.js";

export default function Ranking({ nivel, lista }) {
  return (
    <section aria-label="Ranking" className="ranking">
      <h3 className="etiqueta-configuracion">
        Ranking {nivel ? `· ${NIVELES[nivel]}` : ""}
      </h3>

      {!nivel && <p className="ranking-vacio">Elige un nivel para ver su ranking.</p>}
      {nivel && lista.length === 0 && (
        <p className="ranking-vacio">Aún no hay partidas en este nivel.</p>
      )}

      {lista.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Jugador</th>
              <th>Puntaje</th>
              <th>Tiempo</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((fila, i) => (
              <tr key={`${fila.nombre}-${fila.puntaje}-${fila.tiempo}-${i}`}>
                <td>{i + 1}</td>
                <td>{fila.nombre}</td>
                <td>{fila.puntaje} pts</td>
                <td>{fila.tiempo} s</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
