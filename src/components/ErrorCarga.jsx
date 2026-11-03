export default function ErrorCarga({ visible }) {
  return (
    <div id="errorCarga" className={visible ? "visible" : ""} role="alert">
      <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <div>
        <strong>Error de conexión:</strong> No se pudieron cargar las preguntas de esta franquicia.
        Por favor intenta seleccionar otra franquicia o recarga la página.
      </div>
    </div>
  );
}
