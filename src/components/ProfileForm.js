import React, { useState } from "react";
import style from "../css/ProfileForm.module.css";

export default function ProfileForm() {
  const [form, setForm] = useState({
    nombre: "Patricia",
    apellido: "Larrosa",
    email: "patricia@gmail.com",
    telefono: "3404537758",
    descripcion:
      "Soy Patricia Amanda Larrosa\nterapeuta energética y guía espiritual. Mi misión es acompañar a cada alma en su camino de sanación, liberación y reconexión con su esencia divina.\n\nETC"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.profileContainer}>
      <div className={style.profileCard}>
        <h2>Perfil Visible de {form.nombre}</h2>
        <div className={style.profilePic} />
        
        <div className={style.formGrid}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Número de Tel</label>
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
        />

        <label>Tu descripción</label>
        <textarea
          name="descripcion"
          rows="5"
          value={form.descripcion}
          onChange={handleChange}
        />

        <button className={style.editBtn}>Editar</button>
      </div>
    </div>
  );
}
