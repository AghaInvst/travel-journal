import { useState } from 'react'
import data from './data'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

function App() {

  const cardz = data.map(item => {
    return (
      <Cards 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cardz}
    </div>
  )
}

export default App
