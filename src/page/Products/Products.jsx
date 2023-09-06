import React from 'react';
import style from './Products.module.css';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import NavBar from '../../components/navBar/NavBar';
import img from '../../assets/img4.jpg'


function Products() {

    const products = [
        {
            id: 1,
            name: 'FUNCION VAPOR',
            text: 'Los complementos de los recipientes Steel Way aprovechan al máximo el sello hermético que se produce en el interior. Cociná carnes o verduras con el mismo vapor que cada alimento exhala. Tus alimentos se cocinarán utilizando sus propios juegos y así conservaran todos sus minerales y vitaminas. El sello hermético que se produce en el interior del recipiente disminuye las horas de cocción, logra que los alimentos no se deshidraten y que realmente se cocinen con sus propios jugos, asegurando salud, practicidad y economía.',
            img: img
        },
        {
            id: 2,
            name: 'FUNCION HORNO',
            text: 'El revolucionario diseño de nuestros recipientes Steel Way permite realizar la cocción de tus alimentos igual que el horno, pero ahorrando hasta un 80% de gas, ya que sólo se utilizan a fuego mínimo. Al utilizar los orificios abiertos, la salida de vapor es mínima y permite realizar la misma cocción que el horno.',
            img: img
        },
        {
            id: 3,
            name: 'FUNCION FRITURAS',
            text: '¡Cociná tus frituras con Steel Way! Al utilizar nuestros recipientes a fuegos tan bajos, el aceite nunca superará los 85º C de temperatura, por lo cual no se quemará y no cambiará su textura ni su sabor. Reutilizá tu aceite entre 4 o 5 veces sin riesgo a tu salud y ahorrá litros de aceite por mes.',
            img: img
        }
    ]

    return (
        <section className={style.products}>
            <NavBar />
            <div className={style.containerTitle}>
                <h1>Productos</h1>
            </div>

            <div className={style.containerSubtitle} >
                <h1>RECIPIENTES</h1>
                <p>Nuestros recipientes surgen a través de todo los inconvenientes que representan aquellos utilizados para la cocción del día a día. Fabricados con acero inoxidable a nivel quirúrgico con fondo termodifusor, nuestros recipientes permiten la perfecta distribución del calor y justa higiene para la cocción de los alimentos, preservando sus nutrientes naturales. El sistema de cocina al vapor de los recipientes Steel Way permite utilizarlos con un mínimo de agua para cocinar las comidas en vez de hervirlas. El recipiente retiene la humedad despedida por los alimentos y su cocción se continúa llevando a cabo con sus propios jugos, conservando todas sus propiedades naturales para garantizarle una alimentación saludable.</p>
            </div>
            <div className={style.container} >
                <div>
                    {products ? (
                        products.map((p) => (
                            <Card
                                key={p.id}
                                name={p.name}
                                text={p.text}
                                img={p.img}
                            />
                        ))
                    )
                        : (<p>No hay</p>)
                    }
                </div>

            </div>
            <Footer />
        </section>
    )
}

export default Products;