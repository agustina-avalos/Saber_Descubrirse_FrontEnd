import React from 'react'
import { FaUser, FaCalendarAlt, FaBell, FaEnvelope } from "react-icons/fa";
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import patriciaImg from './../css/fotoPatri.png'
import style from "./../css/AdminPage.module.css"
import ProfileForm from '../components/ProfileForm';


function AdminPage() {
    const [selected, setSelected] = useState("perfil"); 


    const user = { name: "Patricia Larrosa", profileImg:patriciaImg};
    const menuItems = [
        { icon: <FaUser />, label: "Mi Perfil",id: "perfil"},
        { icon: <FaCalendarAlt />, label: "Calendario" ,id: "calendario"},
        { icon: <FaBell />, label: "Novedades",id: "novedades" },
        { icon: <FaEnvelope />, label: "Mensajes", id: "mensajes" },
    ];

     const renderForm = () => {
        switch (selected) {
        case "perfil":
            return <ProfileForm></ProfileForm>
        case "calendario":
            return <div>Calendario</div>
        case "novedades":
            return <div>Novedades Form</div>
        case "mensajes":
            return <div>Mensajes Form</div>
        default:
            return <div>Selecciona una opción</div>;
        }
    };

  return (
    <div className={style.container}>
        <Navbar></Navbar>

        <div style={{ display: "flex" }}>
            <SideBar user={user} menuItems={menuItems} onSelect={setSelected} selected={selected} />
            <main style={{ flex: 1, padding: "1rem" }}>
                {renderForm()}</main>
        </div>
    </div>
  );
}



export default AdminPage
