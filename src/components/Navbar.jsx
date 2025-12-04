import React, { useState } from "react";
import '../css/navbar.css';
 
import { FiMenu, FiX } from "react-icons/fi"; 
import Cartwidget from "./Cartwidget";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <a href="#" className="btn-menu" onClick={toggleMenu}>
          <FiMenu />
        </a>
        <a href="#" className="logo">HP</a>

        {/* <div className="btn-group">
          <a href="#" className="btn-shop">
            <FaShoppingBag />
          </a>
          <a href="#" className="btn-primary">Iniciar Sesión</a>
        </div> */}
        <Cartwidget />
      </header>

      {/* menú lateral */}
      <aside className={`menu ${menuOpen ? 'active' : ''}`}>
        <a href="#" className="btn-close" onClick={toggleMenu}>
          <FiX />
        </a>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
