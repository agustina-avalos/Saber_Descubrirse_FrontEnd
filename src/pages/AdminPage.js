import React from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaCalendarAlt, FaBell, FaEnvelope } from "react-icons/fa";
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';

function AdminPage() {
 const user = { name: "Patricia Larrosa" };
  const menuItems = [
    { icon: <FaUser />, label: "Mi Perfil", href: "/perfil" },
    { icon: <FaCalendarAlt />, label: "Calendario", href: "/calendario" },
    { icon: <FaBell />, label: "Novedades", href: "/novedades" },
    { icon: <FaEnvelope />, label: "Mensajes", href: "/mensajes" },
  ];

  return (
    <div>
        <Navbar></Navbar>
        <div style={{ display: "flex" }}>
        <SideBar user={user} menuItems={menuItems} />
        <main style={{ flex: 1, padding: "1rem" }}>Contenido principal</main>
        </div>
    </div>
  );
}



export default AdminPage
