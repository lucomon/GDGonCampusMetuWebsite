import React from 'react'
import './NavBar.css'
import gdgcLogo from '/GDGC_LOGO1.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={gdgcLogo} alt="GDGC Logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#duyurular" className="nav-link">Duyurular</a>
          </li>
          <li className="nav-item">
            <a href="#hakkimizda" className="nav-link">Hakkımızda</a>
          </li>
          <li className="nav-item">
            <a href="#egitimler" className="nav-link">Eğitimler</a>
          </li>
          <li className="nav-item">
            <a href="#yarismalar" className="nav-link">Yarışmalar</a>
          </li>
          <li className="nav-item">
            <a href="#etkinlikler" className="nav-link">Etkinlikler</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
