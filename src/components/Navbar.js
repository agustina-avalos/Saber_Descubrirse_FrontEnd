import React from 'react';
import styles from '../css/Navbar.module.css';
import { Link } from "react-router-dom";
import ProfessionalPage from '../pages/ProfessionalPage';
import Home from '../pages/Home';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <Link to="/" className={styles.navItem}><a className={styles.link} href="#services-carousel">Nuestros servicios</a></Link>
        <Link  to="/professional"  className={styles.navItem}><a className={styles.link} href="#professionals">Profesionales</a></Link>
        <Link className={styles.navItem}><a className={styles.link} href="#contact">Contacto</a></Link>
        <Link className={styles.navItem}><a className={styles.link} href="#research">Investigaciones</a></Link>
        <Link  to="/admin"  className={styles.navItem}><button className={styles.button}>Ingresar</button></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
