import style from './Home.module.css';
import CarouselHome from '../../components/Carousel/CarouselHome';
import Text from '../../components/Text/Text';
import Parallax from '../../components/Parallax/Parallax';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/navBar/NavBar';

function Home() {

  return (
    <div className={style.home}>
      <NavBar />
      <CarouselHome />
      <Text />
      <Parallax />
      <Footer />
    </div>
  );
}

export default Home;