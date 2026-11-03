// ============================================================
//  PASO 3 — Péguelo completo en  src/App.jsx
//  Clase 11 · Unidad 3.1 · Introducción y repaso de React js
//  Buenas Prácticas de Desarrollo de Software · CUC
// ============================================================

import { useState } from 'react';
import { Boton } from './components/Boton';
import { FilaEstudiante } from './components/FilaEstudiante';


function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 }
  ]);

  const [nombreInput, setNombreInput] = useState('');

  function agregar() {
    if (!nombreInput.trim()) return;
    const nuevo = { id: Date.now(), nombre:nombreInput, nota: 3.2 };
    setEstudiantes([...estudiantes, nuevo]);
    setNombreInput('');
  }

  return (
    <>
      <h1>Notas</h1>
      <div>
        <input
        type="text"
        value={nombreInput}
        onChange={e => setNombreInput(e.target.value)}
        />
        <Boton alHacerClic={agregar}>Agregar estudiante</Boton>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nota</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map(e => (
            <FilaEstudiante key={e.id} estudiante={e} />
          ))}
        </tbody>
      </table>
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
