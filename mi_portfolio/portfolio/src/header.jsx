import { useState } from 'react'
import youtubeLogo from './assets/youtube.png'
import './header.css'


function Head({onhomeClick}) {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="header">
         <h1 className="home-button">
           <a 
             href="https://www.youtube.com/@pabloantunezmusic" 
             target="_blank" 
             rel="noopener noreferrer"
             
           >
             PΔß└Φ Δ∩tú∩£Z
           </a>
         </h1>
     <div className="header-right">{/* 
          <h2>YouTube</h2> */}
            <a 
             href="https://www.youtube.com/@pabloantunezmusic"
             className="youtube-button"
             target="_blank"
             rel="noopener noreferrer"           
           >
           </a>{/* 
           <h2>Instagram</h2> */}
            <a 
             href="https://www.instagram.com/pablo_antunez_music/"
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

export default Head