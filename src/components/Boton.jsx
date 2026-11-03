export function Boton({ children, alHacerClic, variante = 'primario', cargando = false }) {
  return (
    <button
      onClick={alHacerClic}
      disabled={cargando}
      className={`boton ${variante}`}
    >
      {cargando ? 'Cargando...' : children}
    </button>
  );
}