# Tema 3 - Actividad 4: Proyecto en React 

Aplicación web interactiva de lista de tareas ("Todo List") desarrollada con **React** y **Vite**, implementando componentes funcionales, paso de propiedades (`props`), gestión de estado reactivo (`useState`), manejo de eventos y renderizado dinámico de listas con claves únicas (`keys`). 

---

## Preguntas 

### a) ¿Qué diferencia hay entre props y state en React?
Las **props** (propiedades) son datos que se envían desde un componente padre hacia un componente hijo. Son estrictamente de **solo lectura** (*read-only*) para el componente receptor y sirven para configurar o personalizar su comportamiento desde el exterior de manera estática o externa. 
En cambio, el **state** (estado) es un dato interno, privado y administrado directamente por el propio componente. Puede cambiar a lo largo del tiempo debido a las acciones o interacciones del usuario, y cada vez que se actualiza mediante su función modificadora, provoca que React vuelva a renderizar automáticamente el componente para reflejar los cambios en la interfaz de usuario.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Es fundamental porque le permite a React identificar cada elemento dentro de un arreglo. Cuando un elemento de la lista es modificado, agregado o eliminado, las `keys` ayudan a que React optimice el proceso de actualización del DOM virtual, sabiendo exactamente qué nodo cambió en lugar de tener que redibujar toda la lista desde cero, lo que previene errores de renderizado y pérdida de estado en los componentes.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook fundamental de React que permite agregar y recordar un estado reactivo dentro de un componente funcional. Al invocarlo, devuelve un arreglo con dos elementos: la variable que almacena el valor actual y una función específica para actualizar dicho valor.
* **Ejemplo en mi aplicación:** Lo utilicé en dos partes principales: 
  1. Para controlar el texto que se escribe en el input de nuevas tareas (`const [texto, setTexto] = useState("")`), actualizándose en tiempo real mediante eventos.
  2. Para administrar el arreglo reactivo de tareas (`const [notas, setNotas] = useState(...)`), permitiendo agregar nuevas notas, marcarlas como completadas o eliminarlas dinámicamente.

### d) Repositorio
[https://github.com/sarailunacenobio05-cpu/t3_act4_react](https://github.com/sarailunacenobio05-cpu/t3_act4_react)

### e) GitHub Pages
[https://sarailunacenobio05-cpu.github.io/t3_act4_react/](https://sarailunacenobio05-cpu.github.io/t3_act4_react/)