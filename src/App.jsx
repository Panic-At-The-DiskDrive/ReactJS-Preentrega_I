import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <ItemListContainer greeting="¡Bienvenido a Beru Gaming!" />
        <ItemListContainer greeting="Aquí encontrarás lo mejor del gaming argentino." />
      </div>
    </>
  )
}

export default App
