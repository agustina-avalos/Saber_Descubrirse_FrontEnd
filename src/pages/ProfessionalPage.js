import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListProfesionalCard from "../components/cards/ListProfesionalCard";
import styles from "../css/Home.module.css"
import logo from "../css/WhatsApp Image 2025-04-08 at 19.26.58final.png"

function ProfessionalPage() {
   return (
    <div className={styles.container}>
        <Navbar />
        <main>
            <section>
            <ListProfesionalCard />
            </section>
            <div className={styles.containerLogo} >
                <img className={styles.imageProfPage} src={logo} alt="Gráfico de triángulo dentro de círculo" />
            </div>
        </main>
        <Footer/>
    </div>
   )
}

export default ProfessionalPage;