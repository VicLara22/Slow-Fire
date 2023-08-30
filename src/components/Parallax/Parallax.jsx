import React from 'react';
import style from './Parallax.module.css';

function Parallax() {
  return (
    <section className={style.containerParallax}>
      <div className={style.lowerHalf}>
        <div className={style.containerText}>
          <h1 >TUS COMIDAS</h1>
          <h3 >MÁS SANAS Y RICAS</h3>
        </div>
      </div>
      <div className={style.upperHalf}>
        <div className={style.containerRedes}>
          <h1>SEGUINOS</h1>
          <i className="bi bi-facebook "></i>
          <i className="bi bi-instagram"></i>
        </div>
      </div>
    </section>
  )
}

export default Parallax