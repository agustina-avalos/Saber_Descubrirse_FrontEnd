import React from 'react';
import style from "../../css/CardExp.module.css"

function CardExp({ name, text }) {
  return (
    <div className={style.card}>
      <h3 className={style.title}>{name}</h3>
      <p className={style.text} >{text}</p>
    </div>
  );
}
export default CardExp;