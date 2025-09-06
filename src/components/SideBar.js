import React from 'react'
import PropTypes from 'prop-types'
import styles from '../css/SideBar.module.css'
import { FaUser, FaCalendarAlt, FaBell, FaEnvelope } from "react-icons/fa";

function SideBar({ user, menuItems,onSelect, selected}) {
  return (
    <div className={styles.sidebar}>
      {/* Usuario */}
      <div className={styles.user}>
        <div className={styles.avatar}>
            {user.profileImg ? <img src={user.profileImg} alt={user.name} /> : <span>foto perfil</span>} 
        </div>
        <span className={styles.username}>{user.name}</span>
      </div>

      {/* Menú */}
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`${styles.menuItem} ${selected === item.id ? styles.active : ""}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}



export default SideBar
