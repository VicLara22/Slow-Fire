import React from 'react'
import FormContact from '../../components/Form/FormContact';
import style from './Contact.module.css';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';


function Contact() {
    return (
        <section className={style.contact}> 
        <NavBar/>
        <div className={style.containerTitle}>
            <h1>Contacto</h1>
        </div>
        <FormContact/>
        <Footer/>
        </section>
    )
}

export default Contact;