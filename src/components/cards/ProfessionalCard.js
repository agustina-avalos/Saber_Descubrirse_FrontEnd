import React from 'react'
import PropTypes from 'prop-types'
import style from "../../css/ProfessionalCard.module.css"

function ProfessionalCard({ name, description, Professionalimg }) {
  return (
    <div className={style.card}>
      <div className={style.profilepic}>
        {Professionalimg ? <img src={Professionalimg} alt={name} /> : <span>foto perfil</span>}
      </div>
      <div className={style.cardcontent}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ProfessionalCard
