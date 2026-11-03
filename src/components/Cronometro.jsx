import { useEffect, useState } from "react";

// Muestra los segundos transcurridos desde `inicio` mientras la partida está activa;
// al terminar muestra el tiempo final guardado.
export default function Cronometro({ inicio, tiempo, activo }) {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    if (!activo) {
      return;
    }

    const actualizar = () => setSegundos(Math.floor((Date.now() - inicio) / 1000));
    actualizar();

    const intervalo = setInterval(actualizar, 1000);
    return () => clearInterval(intervalo);
  }, [activo, inicio]);

  return <span className="valor-estado" id="tiempo">{activo ? segundos : tiempo ?? 0} s</span>;
}
