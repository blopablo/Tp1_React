import { useState } from 'react'
import youtubeLogo from './assets/youtube.png'
import './footer.css'


function Foot() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="footer">
          <h2>PΔß└Φ Δ∩tú∩£Z</h2>
             <h3 className='h3'>Si haz llegado hasta aquí eres muy perseverante, bienvenido al grupo ingresando la contraseña 333</h3>
        </div>
    </>
  )
}

export default Foot