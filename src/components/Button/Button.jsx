import React from 'react';
import style from './Button.module.css';
import { Link } from 'react-router-dom';

function Button() {
    return (
        <div className={style.btns}>
            <div className={style.btnProdutcs}>
                <Link to='/products'>
                    <button >PRODUCTOS</button>
                </Link>
            </div>
            <div className={style.btnContact}>
                <Link to='/contact'>
                    <button >CONTACTANOS</button>
                </Link>
            </div>
        </div>
    )
}

export default Button;