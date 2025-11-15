import { useState } from 'react'
import fondo from './assets/fondo.jpg'
import fondo1 from './assets/fondo1.jpg'
import fondo2 from './assets/fondo2.jpg'
import Head from './header.jsx'
import Foot from './footer.jsx'
import './App.css'


function App() {
  const [section, setSection] = useState('inicio')

  const handleSectionChange = (newSection) => {
    setSection(newSection)
  }

  const getBackgroundImage = () => {
    switch (section) {
      case 'cv':
        return `url(${fondo})`
      case 'redes':
        return `url(${fondo1})`
      case 'proyectos':
        return "url('./assets/fondo2.jpg')"
      default:
        return "url('./assets/fondo.JPG')"
    }
  }

  const getSectionTitle = () => {
    switch (section) {
      case 'cv':
        return "Currículum Vitae"
      case 'redes':
        return "Mis Redes Sociales"
      case 'proyectos':
        return "Proyectos Musicales"
      default:
        return "Bienvenido"
    }
  }

  return (
    <>
      <Head />
      <h2 style={{ color: 'white', textShadow: '0 0 1rem crimson' }}>
          {getSectionTitle()}
        </h2>
      <div className="button-wrapper">
          <button className="circle-button" onClick={() => handleSectionChange('cv')}>CV</button>
          <button className="circle-button" onClick={() => handleSectionChange('redes')}>Redes</button>
          <button className="circle-button" onClick={() => handleSectionChange('proyectos')}>Proyectos</button>
        </div> 
      {<div className ="pasarimagen"> 
          <button className="pasar-button" onClick={() => handleSectionChange('anterior')}>Back</button>
          <button className="pasar-button" onClick={() => handleSectionChange('siguiente')}>Next</button>
        </div> }
      <Foot />
    </>
  )
}



export default App