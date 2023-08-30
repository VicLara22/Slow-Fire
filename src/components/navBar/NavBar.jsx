import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import img from '../../assets/img1.jpg';


function NavBar() {
    return (
        <nav className={style.nav}>
            <div className={style.containerLogo}>
                <img src={img} alt='logo' />
                <h1>SLOW FIRE</h1>
            </div>
            <div className={style.containerTitle}>
                <Link to='/'>
                    <h1>HOME</h1>
                </Link>
                <Link to='/products'>
                    <h1>PRODUCTOS</h1>
                </Link>
                <h1>RECETAS</h1>
                <Link to='/contact'>
                    <h1>CONTACTOS</h1>
                </Link>
                <i className="bi bi-facebook "></i>
                <i className="bi bi-instagram"></i>
            </div>

        </nav>
    )
}

export default NavBar;