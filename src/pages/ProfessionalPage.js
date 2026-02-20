import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListProfesionalCard from "../components/cards/ListProfesionalCard";
import styles from "../css/Home.module.css"

function ProfessionalPage() {
   return (
    <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>

            <section>
            <ListProfesionalCard />
            </section>
        </main>
        <Footer></Footer>

    </div>
   )
}

export default ProfessionalPage;