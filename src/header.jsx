import { useState } from 'react'
import usuario from './assets/usuario.png'
import './header.css'


function Head({onhomeClick}) {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="header">
         <p className="home-button">
           <a 
             href="/" 
             target="_blank" 
             rel="noopener noreferrer"
             
           >
           </a>
         </p>
     <div className="Login-right">
          {<h3>Iniciar<br/>Seción</h3>}
            <a 
             href="https://www.instagram.com/larrycapizza?igsh=MXB1dXZuZXVwNG16bg=="
             className="usuario-button"
             target="_blank"
             rel="noopener noreferrer"           
           >
           </a>
        </div>
   </div>
    </>
  )
}

export default Head