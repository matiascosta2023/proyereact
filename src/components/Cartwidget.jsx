import React from "react";
import '../css/navbar.css'
import { FaShoppingBag } from "react-icons/fa";
function Cartwidget() {
  return (
    <div className="btn-group">
              <a href="#" className="btn-shop">
                <FaShoppingBag />
              </a>
              <a href="#" className="btn-primary">Iniciar Sesión</a>
            </div>
  );
}

export default Cartwidget;
