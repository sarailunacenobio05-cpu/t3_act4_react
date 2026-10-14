import { useState } from 'react';
import './App.css';

function Encabezado({ tituloApp}) {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h1 className="titulo">{tituloApp}</h1>
      
    </div>
  );
}

function App() {
  const notasIniciales = [
    { id: crypto.randomUUID(), text: "Nota 1", completada: false },
    { id: crypto.randomUUID(), text: "Nota 2", completada: false }
  ];

  const [notas, setNotas] = useState(notasIniciales);
  const [texto, setTexto] = useState("");

  function handleChange(event) {
    setTexto(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (texto.trim() === "") return;

    const nuevaNota = {
      id: crypto.randomUUID(),
      text: texto,
      completada: false,
    };

    setNotas([...notas, nuevaNota]);
    setTexto("");
  }

  function handleEliminar(id) {
    const nuevasNotas = notas.filter(nota => nota.id !== id);
    setNotas(nuevasNotas);
  }

  function handleCompletada(id) {
    const nuevasNotas = notas.map(nota =>
      nota.id === id ? { ...nota, completada: !nota.completada } : nota
    );
    setNotas(nuevasNotas);
  }

  return (
    <div className="containerTodoApp">
      
      <Encabezado tituloApp="Lista de Tareas"  />

      <form className="formularioTarea" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea"
          value={texto}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul className="listaTareas">
        {notas.map(nota => (
          <li key={nota.id} className={nota.completada ? "completada" : ""}>
            <span onClick={() => handleCompletada(nota.id)}>
              {nota.text}
            </span>
            <button onClick={() => handleEliminar(nota.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;