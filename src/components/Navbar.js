import {useEffect, useState} from 'react';
import styles from '../css/Navbar.module.css';
import { Link } from "react-router-dom";
//import ProfessionalPage from '../../pages/ProfessionalPage';
//import Home from '../../pages/Home';

function Navbar() {

  const[scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      setScrolled(window.scrollY > 50); //cuando baja mas de 50px
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <Link to="/" className={styles.navItem}><a className={styles.link} href="#services-carousel">Nuestros servicios</a></Link>
        <Link  to="/professional"  className={styles.navItem}><a className={styles.link} href="#professionals">Sobre mi</a></Link>
        <Link   to="/contact"  className={styles.navItem}><a className={styles.link} href="#contact">Contacto</a></Link>
        <Link className={styles.navItem}><a className={styles.link} href="#research">Suscripciones</a></Link>
        <Link to="/admin" className={styles.navItem}><button className={styles.button}>Ingresar</button></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
