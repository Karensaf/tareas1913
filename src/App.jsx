import Header from "./components/Header"

function App() {
    return(    //*El return siempre debe de ir entre parentesis
      <div className="container">
         <Header titulo='Tareas'/>      {/* //? El componente q estoy importando HEADER */}
      </div>
    )
}

export default App
