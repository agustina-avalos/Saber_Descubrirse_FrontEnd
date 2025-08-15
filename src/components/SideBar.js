import React from 'react'
import PropTypes from 'prop-types'
import styles from '../css/SideBar.module.css'
import { FaUser, FaCalendarAlt, FaBell, FaEnvelope } from "react-icons/fa";

function SideBar({ user, menuItems }) {
  return (
    <div className={styles.sidebar}>
      {/* Usuario */}
      <div className={styles.user}>
        <div className={styles.avatar}></div>
        <span className={styles.username}>{user.name}</span>
      </div>

      {/* Menú */}
      <nav className={styles.menu}>
        {menuItems.map((item, idx) => (
          <a key={idx} href={item.href} className={styles.menuItem}>
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}



export default SideBar
