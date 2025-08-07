import React from 'react';
import CardExp from './CardExp';
import style from "../../css/CardExp.module.css"

function ListCardEpx() {
  const testimonials = [
    { name: 'Paciente Anónimo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { name: 'Paciente Anónimo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { name: 'Paciente Anónimo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { name: 'Paciente Anónimo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { name: 'Paciente Anónimo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
  ];

  return (
    <div className={style.cards}>
      {testimonials.map((t, index) => (
        <CardExp key={index} name={t.name} text={t.text} />
      ))}
    </div>
  );
}

export default ListCardEpx;
