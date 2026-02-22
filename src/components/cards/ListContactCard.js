import React from 'react';
import style from '../../css/Contact.module.css';
import ContactCard from './ContactCard';
import patriciaImg from './../../css/fotoPatri.png';
import jesicaImg from './../../css/fotoJesi.png';


function ListContactCard() {
    const professionals = [
        {
          name: 'Patricia Amanda Larrosa',
          Professionalimg:patriciaImg,
          telefono:"13336561",
          email:"patrilarrosa@gmail.com",
          direccion:"rosario 688, Santa Clara de Buena Vista Santa, Santa Fe"
        },
      ];

  return (
     <div className={style.cardList}>
      {professionals.map((t, index) => (
        <ContactCard key={index} name={t.name} Professionalimg={t.Professionalimg} telefono={t.telefono} email={t.email} direccion={t.direccion} />
      ))}
    </div>
  )
}


export default ListContactCard
