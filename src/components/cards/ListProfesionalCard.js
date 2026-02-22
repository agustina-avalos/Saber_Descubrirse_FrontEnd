import style from '../../css/ProfessionalCard.module.css';
import ProfessionalCard from './ProfessionalCard';
import patriciaImg from './../../css/fotoPatri.png';
import jesicaImg from './../../css/fotoJesi.png';

function ListProfesionalCard() {
  const professionals = [
    {
      name: 'Patricia Amanda Larrosa',
      Professionalimg:patriciaImg,
      description:
        'Soy Patricia Amanda Larrosa, terapeuta energética y guía espiritual. Mi misión es acompañar a cada alma en su camino de sanación, liberación y reconexión con su esencia divina.\n\nTrabajo desde el amor y la presencia, utilizando herramientas como el Reiki (Usui, Lunar, con Ángeles y Gemas), las Constelaciones Familiares, la Sanación del Niño Interior, y la exploración de memorias kármicas y vidas pasadas. También sostengo espacios sagrados como Guardiana del Útero, honrando lo femenino desde lo más profundo.\nIntegro la sabiduría de la radiestesia, el péndulo hebreo, las limpiezas energéticas y la armonización de chakras para restaurar el equilibrio y abrir caminos de claridad y transformación.\n\nCreo que sanar es recordar quiénes somos verdaderamente. Y estoy aquí para acompañarte en ese viaje, con respeto, contención y luz.\n✨ Te espero con el corazón abierto ✨'
    },
    {
      name: 'Jesica Romina Graziano',
      Professionalimg:jesicaImg,
      description: 'Me llamo Jesica Romina Graziano. Soy lectora de Archivos Akáshicos y Facilitadora en Constelaciones FamiliaresAcompaño procesos de sanación emocional, espiritual y transgeneracional, creando un espacio amoroso donde puedas reconectar con tu alma, liberar memorias del pasado y transformar tu historia.Enfocándome en liberar bloqueos, sanar vínculos y transformar los patrones que se repiten en tu linaje.Trabajo desde la conexión con el alma y la fuerza del sistema familiar, para ayudarte a comprender tu historia, soltar cargas que no te pertenecen y abrir caminos nuevos con conciencia y amor.Un espacio sagrado para sanar y recordar quién sos.'
    }
  ];

  return (
    <div className={style.cardList}>
      {professionals.map((t, index) => (
        <ProfessionalCard key={index} name={t.name} description={t.description}Professionalimg={t.Professionalimg} />
      ))}
    </div>
  );
}

export default ListProfesionalCard;
