import React, { useState } from "react";
import '../css/navbar.css';
import { FiMenu, FiX } from "react-icons/fi"; 
import Cartwidget from "./Cartwidget";
import { NavLink } from "react-router-dom";
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
        <NavLink to={'/'} className="logo">HP</NavLink>

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
           <li><NavLink to={'/'} onClick={toggleMenu }>Inicio</NavLink></li>
            <li><NavLink to={'/category/Notebooks'} onClick={toggleMenu }>Notebooks</NavLink></li>
            <li><NavLink to={'/category/PCs'} onClick={toggleMenu }>PCs</NavLink></li>
            <li><NavLink  to={'/category/Componentes'} onClick={toggleMenu }>Componentes</NavLink></li>
            <li><NavLink  to={'/category/Periféricos'} onClick={toggleMenu }>Perifericos</NavLink></li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
