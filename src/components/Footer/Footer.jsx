import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return (
        <footer >

            <div className={style.containerText}>
                <h1>Copyright © 2023 SLOW FIRE</h1>
                <div className={style.whatsapp}>
                    <a
                        target="_blanck"
                        href="https://api.whatsapp.com/send?phone=541169962751"
                    >
                        <i class="bi bi-whatsapp"></i>
                    </a>
                 
                </div>
                <p className={style.msj}>Envianos un mensaje</p>

            </div>
        </footer>
    )
}

export default Footer;