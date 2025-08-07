import React from 'react'
import PropTypes from 'prop-types'
import styles from "../css/Home.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerBlock}><p>Información</p></div>
        <div className={styles.footerBlock}>
            <p>Síguenos</p>
            <a href="#"><img className={styles.socialIcon} src="instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img className={styles.socialIcon} src="facebook-icon.png" alt="Facebook" /></a>
        </div>
        <div className={styles.footerBlock}><p>Contacto: saberDescubrirse.com</p></div>
        <div className={styles.footerBlock}><p>Aviso Legal | Condiciones | Privacidad | Cookies</p></div>
    </footer>
  )
}

export default Footer
