import React from 'react'
import PropTypes from 'prop-types'
import style from './../../css/Contact.module.css'

function ContactCard({ name, Professionalimg, telefono, email, direccion }) {
return (
    <div className={style.card}>
      <div className={style.profilepic}>
        {Professionalimg ? <img src={Professionalimg} alt={name} /> : <span>foto perfil</span>}
      </div>
      <div className={style.cardcontent}>
        <h1>{name}</h1>
        <p>Telefono : {telefono}</p>
        <p> E-mail : {email}</p>
        <p> Direccion : {direccion} </p>
      </div>
    </div>
  );
}


export default ContactCard
