import styles from "../css/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>Información</div>
      <div className={styles.footerBlock}>
        Síguenos en:
        <div className={styles.social}>
          <a href="#">
            <InstagramIcon className={styles.social}/>
          </a>
          <a href="#">
            <FacebookIcon className={styles.social}/>
          </a>
        </div>
      </div>
      <div className={styles.footerBlock}>Contacto: 
        <br></br>
        saberdescubrirse.com
      </div>
      <div className={styles.footerBlock}>
        Aviso Legal | Condiciones | Privacidad | Cookies
      </div>
    </footer>
  );
}

export default Footer;
