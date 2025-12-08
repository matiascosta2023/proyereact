import React from "react";
import '../css/navbar.css';
import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cartwidget() {
  const { cart, cartQuantity } = useContext(CartContext);

  return (
    <div className="btn-group">
      <a href="#" className="btn-shop inline-cart">
        <FaShoppingBag />
       {cart.length > 0 &&   < span className="cart-quantity-inline">{cartQuantity()}</span> }
       
      </a>

      <a href="#" className="btn-primary">Iniciar Sesión</a>
    </div>
  );
}

export default Cartwidget;
