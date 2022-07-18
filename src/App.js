import React from "react";
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
const TEXT = '¡¡¡Feliz Aniversario Linda!!!';
const App = () => {
  const canvasRef = React.useRef(null)
  const url = './Zoe.mp3';
  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })

  return (
    <>
          <audio
  src={url}
  autoPlay
 />
      <div className="main">
        <div ref={canvasRef} />
      </div >
      <div className='container fast-animation'>
        <div className='Profile-title'>🌎🚀🌑💫✨🪐</div>
        <div className='Profile-desc'>
          <p>
           De: Lipe
          </p>
          <p>
           Para: Mari🐼
          </p>
          <p>
          Hola Linda 7 años ⏳ Qué? Cuándo? Cómo? Realmente soy malo contando el tiempo (puedo recordar fechas pero no diferencias) y menos cuando se trata de lo que hemos pasado juntos. 
          Para mi es como si estuvieras en mi vida desde siempre, como si antes de ti no importase mucho recordar.
           Siempre estas a mi lado apoyándome, ayudándome a tomar riesgos y descubrir nuevas cosas.
            Contigo el tiempo es tan relativo como nuestro universo 🌟, cuando estoy lejos de ti 📏 el tiempo pasa muy lento, contigo cerca se me pasa el día en segundos y me quedo preguntándome como anochece tan rápido 🌃. 
            Pero eso también es algo bueno porque a la hora de dormir puedo contar con suerte 💤 y soñar contigo.
          </p>
          <p>
          Linda te amo 💟. Claro que sé cómo pasaron estos años, te conocí en mi primera aventura sólo en un continente lejano 🎎, desde ese día no paramos de viajar y aventurarnos en lo desconocido ✈🥬🍜🐕, construyendo juntos algo más, aprendiendo uno del otro 👨‍🎓. 
          Linda yo ya no soy solo yo, soy alguien también por ti y es algo que me da orgullo. 
          Quiero envejecer a tu lado y acompañarte en este recorrido 🌌, en esta nave que no para, en este tiempo que logramos coincidir, en en el instante en que un dado 🎲 que lanzamos nos puso juntos en el espacio perfecto. 
          Te amo Mari🐼 y quiero ir contigo hasta el infinito🌠 y más allá💫.
          </p>
        </div>
      </div>

    </>
  )
}

export default App;
