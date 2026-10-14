
import { useState } from "react";

// Pasar Props

function TodoApp() {
  
  const notass = [
    {
      id: crypto.randomUUID(),
      text: "Soy la nota 1",
    },
    {
      id: crypto.randomUUID(),
      text: "Soy la nota 1",
    },
  ]
  const {notas,setNotas} = useState(notass);
    return (
        <>
        <h1>Notas</h1>
        <ul>
            {notas.map(nota => <li key={nota.id}>{nota.text}</li>)}
        </ul>
        </>
    );
}

export default App;