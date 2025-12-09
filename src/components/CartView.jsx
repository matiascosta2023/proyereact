import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/CartView.css'; 

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  // Si el carrito está vacío, mostramos un mensaje 
  if (cart.length === 0) {
    return (
      <div className="cart-container" style={{ textAlign: 'center' }}>
        <h1 className="cart-title">Tu carrito está vacío</h1>
        <Link to="/" className="btn-checkout">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu Carrito</h1>

      <div className="cart-list">
        {cart.map((compra) => (
          <div key={compra.id} className="cart-item">
           
            <img src={compra.img} alt={compra.nombre} className="cart-img" />

          
            <span className="cart-item-title">{compra.nombre}</span>

       
            <span className="cart-price">${compra.precio}</span>

           
            <span className="cart-quantity">Cant: {compra.quantity}</span>

         
            <span className="cart-subtotal">
              ${(compra.precio * compra.quantity).toFixed(2)}
            </span>

       
            <button 
              className="btn-delete" 
              onClick={() => removeItem(compra.id)}
              title="Eliminar producto"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <span className="cart-total">Total: ${total()}</span>
        
        <div className="cart-actions">
          <button className="btn-vaciar" onClick={clear}>
            Vaciar Carrito
          </button>
          
          <Link to={'/checkout'} className="btn-checkout">
            Terminar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;