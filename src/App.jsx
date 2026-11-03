// ============================================================
//  PASO 3 — Péguelo completo en  src/App.jsx
//  Clase 11 · Unidad 3.1 · Introducción y repaso de React js
//  Buenas Prácticas de Desarrollo de Software · CUC
// ============================================================

import { useState } from 'react';

function Boton({ children, alHacerClic, variante = 'primario', cargando = false }) {
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

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 }
  ]);

  function agregar() {
    const nuevo = { id: Date.now(), nombre: 'Nuevo', nota: 3.2 };
    setEstudiantes([...estudiantes, nuevo]);      // uno NUEVO, no push
  }

  return (
    <>
      <h1>Notas</h1>
      <ul>
        {estudiantes.map(e => <li key={e.id}>{e.nombre} - {e.nota}</li>)}
      </ul>
      <Boton alHacerClic={agregar}>Agregar estudiante</Boton>
    </>
  );
}

export default App;


// ============================================================
//  PASO 4 — Rompa el código a propósito, uno por uno,
//  y devuélvalo antes de seguir con el siguiente.
// ============================================================
//
//  1) Cambie   key={e.id}   por   key={1}
//     Agregue tres estudiantes y mire la advertencia en la consola (F12).
//
//  2) Agregue   className="caja"   al <h1> y luego cámbielo por   class="caja"
//     React avisa en la consola. Lea el mensaje exacto que da.
//
//  3) Escriba   boton   en minúscula (en la función y en los dos usos).
//     React cree que es una etiqueta de HTML y no la encuentra.
//
//  4) Cambie   setEstudiantes([...estudiantes, nuevo]);
//        por   estudiantes.push(nuevo);
//     El arreglo cambia pero la pantalla NO se entera. Es el error más común.
//
//  5) Cambie   onClick={alHacerClic}   por   onClick={alHacerClic()}
//     Se ejecuta al cargar la página, no al hacer clic.
//
// ============================================================
