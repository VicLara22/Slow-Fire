import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import img from '../../assets/img1.jpg';
import { useEffect, useState } from 'react';
import useScrollPosition from '../../hook/ScrollPosition';


function NavBar() {

    const links = [
        {
            id: 1,
            title: "HOME",
            link: '/'
        },
        {
            id: 2,
            title: "PRODUCTOS",
            link: '/products'
        },
        {
            id: 3,
            title: "RECETAS",
            link: '/recipes'
        },
        {
            id: 4,
            title: "CONTACTO",
            link: '/contact'
        }
    ]
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectDimension);
        windowDimension.width > 800 && setNavBarOpen(false);
        return () => {
            window.removeEventListener('resize', detectDimension);
        }
    }, [windowDimension]);

    const scrollPosition = useScrollPosition();

    return (
        <nav className={`${style.nav} ${navBarOpen ? style.navOpen : scrollPosition > 0 ? style.navOnScroll : ''
            }`}>
            {!navBarOpen &&
                <div className={style.containerLogo}>
                    <img src={img} alt='logo' />
                    <h1>SLOW FIRE</h1>
                </div>
            }
            {!navBarOpen && windowDimension.width < 800 ? (
                <div className={style.containerMenu}>
                    <i className="bi bi-list"
                        onClick={() => setNavBarOpen(!navBarOpen)}
                        style={{ fontSize: '25px' }}
                    ></i>
                </div>
            ) :
                (
                    windowDimension.width < 800 && (
                        <div className={style.containerMenu}>
                            <i className="bi bi-x"
                                onClick={() => setNavBarOpen(!navBarOpen)}
                            ></i>
                        </div>
                    )
                )}
            {navBarOpen && (
                <div className={style.containerTitle}> 
                    <div className={style.containerLink}>
                        {links.map(l => (
                            <Link
                                key={l.id}
                                onClick={() => setNavBarOpen(false)}
                                to={l.link}
                                className={style.navLink}>
                                {l.title}
                            </Link>
                        ))}

                        <div className={style.containerRedes}>
                            <i className="bi bi-facebook "></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                </div>
            )}
            {windowDimension.width > 800 && (
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
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                </div>
            )}
        </nav>
    )
}

export default NavBar;