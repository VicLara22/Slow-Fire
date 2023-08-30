import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import style from './CarouselHome.module.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const CarouselHome = () => {

    const array = [
        {
            id: 1,
            name: 'SALUD'
        },
        {
            id: 2,
            name: 'ECONOMIA'
        },
        {
            id: 3,
            name: 'PRACTICIDAD'
        },
        {
            id: 4,
            name: 'SLOW FIRE'
        },
    ]

    const images = [
        img1,
        img2,
        img3
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        const textInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % array.length);
        }, 4000);

        return () => {
            clearInterval(imageInterval);
            clearInterval(textInterval);
        };
    }, [images.length, array.length]);


    return (
        <div
            className={style.image_carousel}
            style={{ backgroundImage: `url(${images[currentImageIndex]})`, }}>


            <div className={style.textContainer}>
                <h1 className={style.text}>{array[currentTextIndex].name}</h1>
                <p className={style.textTwo}>MÁXIMA CALIDAD</p>
                <Button />
            </div>

        </div>
    );
};
export default CarouselHome;