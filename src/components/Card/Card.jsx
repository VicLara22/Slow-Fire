import React from 'react';
import style from './Card.module.css';

function Card({ id, name, text, img }) {
  return (
    <section>
      <div key={id} className={style.container}>
        <div className={style.containerImg}>
          <img src={img} alt={name} />
        </div>
        <div className={style.containerText}>
          <h1>{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default Card;