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
<nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
  <ul className={styles.navList}>
    <li className={styles.navItem}>
      <Link to="/" className={styles.link}>Nuestros servicios</Link>
    </li>
    <li className={styles.navItem}>
      <Link to="/professional" className={styles.link}>Profesionales</Link>
    </li>
    <li className={styles.navItem}>
      <Link to="/contact" className={styles.link}>Contacto</Link>
    </li>
    <li className={styles.navItem}>
      <Link to="/research" className={styles.link}>Suscripciones</Link>
    </li>
    <li className={`${styles.navItem} ${styles.pushRight}`}>
      <Link to="/admin">
        <button className={styles.button}>Ingresar</button>
      </Link>
    </li>
  </ul>
</nav>

  );
}

export default Navbar;
