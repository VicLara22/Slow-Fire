import React from 'react';
import style from './Text.module.css';

function Text() {
    return (
        <div className={style.container}>
            <h1>SLOW FIRE</h1>
            <div className={style.containerP}>
                <p>
                    Somos una empresa argentina que nació en 1991 con el ideal de llevar a cada hogar de la Argentina productos de máxima calidad en acero inoxidable a nivel quirúrgico (material no tóxico), garantizando una nueva forma de cocinar, práctica y saludable, preservando los valores nutritivos de los alimentos. Desde ese momento, a la actualidad, hemos sumado diversos productos destinados a la practicidad y seguridad a la hora de cocinar, sin perder la calidad que siempre nos caracterizó.

                    Nuestro revolucionario sistema de comercialización está basado en distribuidores independientes, quienes se encargan de publicitar y comercializar los productos en forma independiente a través de un importante asesoramiento personalizado.</p>
            </div>
        </div>
    )
}

export default Text;