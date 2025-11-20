import { useState } from 'react'
import youtubeLogo from './assets/youtube.png'
import './footer.css'


function Foot() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="footer">
         <div className="footer-links">
            <h1>Seguinos!</h1>
                  <a 
                   href="https://www.instagram.com/larrycapizza?igsh=MXB1dXZuZXVwNG16bg=="
                   className="instagram-button"
                   target="_blank"
                   rel="noopener noreferrer"           
                 >
                 </a>
              </div>
      </div>
    </>
  )
}

export default Foot