import React from 'react'
import PropTypes from 'prop-types'
import ListContactCard from '../components/cards/ListContactCard'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../css/Home.module.css"

function ContactPage(props) {
  return (
    <div className={styles.container}>
        <Navbar />
        <main>
          <div className={styles.section}>
            <h1 className={styles.Title}> Contacto </h1>
            <p>
              Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.
              Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming 
              Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
              et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
              Lorem ipsum dolor sit amet consectetur adipiscing elit in natoque himenaeos, 
              taciti molestie cubilia felis lectus sagittis ornare nibh maecenas, per augue imperdiet commodo nec scelerisque etiam ante dapibus.
              Commodo interdum quam vehicula cursus mi vel suscipit, taciti accumsan hendrerit primis gravida aliquet potenti, eros litora sociis a varius in. Vivamus diam nec etiam erat vel metus fermentum suscipit, 
              gravida natoque lacus hac congue ad mauris nunc curabitur, egestas at volut.
            </p>
          </div>

          <section>
            <ListContactCard/>
          </section>

          <section className={styles.section}>
            <h1 className={styles.Title}> O puedes Seleccionar tu turno desde aqui: </h1>
          </section>

        </main>
        <Footer></Footer>
    </div>
  )
}



export default ContactPage
