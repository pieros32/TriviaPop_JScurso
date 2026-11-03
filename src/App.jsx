import { useState } from "react";
import { preguntas } from "./data/preguntas.js";
import {
  estadoInicial,
  franquiciaDisponible,
  iniciarNivel,
  responder,
  siguiente
} from "./logic/trivia.js";
import Header from "./components/Header.jsx";
import ErrorCarga from "./components/ErrorCarga.jsx";
import Configuracion from "./components/Configuracion.jsx";
import BarraEstado from "./components/BarraEstado.jsx";
import TarjetaTrivia from "./components/TarjetaTrivia.jsx";
import Footer from "./components/Footer.jsx";

import Ranking from "./components/Ranking.jsx";
import { agregarResultado, cargarRanking, guardarRanking } from "./logic/ranking.js";

const FRANQUICIA_INICIAL = "the-walking-dead";

export default function App() {
  const [estado, setEstado] = useState(() => estadoInicial(FRANQUICIA_INICIAL));
  const [nombre, setNombre] = useState("");
  const [ranking, setRanking] = useState(cargarRanking);

  const disponible = franquiciaDisponible(estado.franquicia);
  const pregunta =
    estado.nivel && !estado.terminado ? preguntas[estado.nivel][estado.indice] : null;
  const total = estado.nivel ? preguntas[estado.nivel].length : 0;
  const numero = estado.terminado ? total : pregunta ? estado.indice + 1 : 0;

  const partidaEnCurso = Boolean(estado.nivel) && !estado.terminado;

  function seleccionarNivel(nivel) {
    if (!disponible) {
      return;
    }
    if (!nombre.trim()) {
      setEstado({ ...estado, mensaje: "Escribe tu nombre para comenzar." });
      return;
    }
    setEstado(iniciarNivel(estado, nivel, preguntas));
  }

  function avanzar() {
    const nuevo = siguiente(estado, preguntas);

    // La partida acaba de terminar: se guarda en el ranking una sola vez
    if (nuevo.terminado && !estado.terminado) {
      const actualizado = agregarResultado(ranking, nuevo.nivel, {
        nombre: nombre.trim(),
        puntaje: nuevo.puntaje,
        tiempo: nuevo.tiempo
      });
      setRanking(actualizado);
      guardarRanking(actualizado);
    }

    setEstado(nuevo);
  }

  function cambiarFranquicia(franquicia) {
    const nuevo = estadoInicial(franquicia);
    // Si ya había un nivel activo y la franquicia tiene preguntas, reinicia ese nivel
    if (estado.nivel && franquiciaDisponible(franquicia)) {
      setEstado(iniciarNivel(nuevo, estado.nivel, preguntas));
    } else {
      setEstado(nuevo);
    }
  }

  return (
    <>
      <main className="aplicacion-trivia">
        <Header />
        <ErrorCarga visible={!disponible} />
        <Configuracion
          franquicia={estado.franquicia}
          nivel={estado.nivel}
          nombre={nombre}
          nombreBloqueado={partidaEnCurso}
          onCambiarNombre={setNombre}
          onCambiarFranquicia={cambiarFranquicia}
          onSeleccionarNivel={seleccionarNivel}
        />
        <BarraEstado
          nivel={estado.nivel}
          numero={numero}
          total={total}
          puntaje={estado.puntaje}
          inicio={estado.inicio}
          tiempo={estado.tiempo}
          activo={partidaEnCurso}
        />
        <TarjetaTrivia
          estado={estado}
          pregunta={pregunta}
          disponible={disponible}
          onResponder={(i) => setEstado(responder(estado, i))}
          onSiguiente={avanzar}
        />
        <Ranking nivel={estado.nivel} lista={estado.nivel ? ranking[estado.nivel] : []} />
      </main>
      <Footer />
    </>
  );
}
