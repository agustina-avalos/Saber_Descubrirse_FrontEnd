import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListCardEpx from "../components/cards/ListCardExp";
import styles from "../css/Home.module.css"
import logo from "../css/centroDelSerLogo-removebg.png"



function Home() {
   return (
    <div className={styles.container}>
      <Navbar />

      <main>
        <section className={styles.section}>
          <div className={styles.containerintroTitle}>
            <h1 className={styles.Title}>Centro del Ser</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit in natoque himenaeos,
               taciti molestie cubilia felis lectus sagittis ornare nibh maecenas, 
               per augue imperdiet commodo nec scelerisque etiam ante dapibus. 
               Commodo interdum quam vehicula cursus mi vel suscipit, taciti accumsan hendrerit primis gravida aliquet potenti, 
               eros litora sociis a varius in. Vivamus diam nec etiam erat vel metus fermentum suscipit, 
               gravida natoque lacus hac congue ad mauris nunc curabitur, egestas at volut</p>
          </div>

          <div className={styles.containerLogo} >
            <img className={styles.introImage} src={logo} alt="Gráfico de triángulo dentro de círculo" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.Title}>Como trabajamos</h2>
          <p>Body text for your whole articlcoe or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. 
            Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. 
            Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            Lorem ipsum dolor sit amet consectetur adipiscing elit in natoque himenaeos, 
            taciti molestie cubilia felis lectus sagittis ornare nibh maecenas, per augue imperdiet commodo nec scelerisque etiam ante dapibus. 
            Commodo interdum quam vehicula cursus mi vel suscipit, taciti accumsan hendrerit primis gravida aliquet potenti, 
            eros litora sociis a varius in. Vivamus diam nec etiam erat vel metus fermentum suscipit, 
            gravida natoque lacus hac congue ad mauris nunc curabitur, egestas at volut
          </p>
        </section>
        <section className={styles.section}>
            <h2 className={styles.Title}>Nuestros Pacientes</h2>
          <ListCardEpx />
        </section>
      </main>
    <Footer></Footer>
    </div>
   )
}

export default Home;