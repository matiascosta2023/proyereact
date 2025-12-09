import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import '../css/detail.css';

const ItemDetail = ({ detalle }) => {
  const { addItem } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    console.log(`agregaste ${cantidad} al carrito`);
    setPurchase(true);
    addItem(detalle, cantidad);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-content">
        
   
        <img
          src={detalle.img}
          alt={detalle.nombre}
          className="item-detail-img"
        />

      
        <div className="item-detail-info">
          
 
          <h2 className="detail-title">{detalle.nombre}</h2>

        
          
          <p className="info-row">
            <strong>Categoría:</strong> {detalle.categoria}
          </p>

          <p className="info-row">
            <strong>Descripción:</strong> {detalle.descripcion}
          </p>

          <p className="precio">
            <strong>Precio:</strong> ${detalle.precio}
          </p>

          <p className="info-row">
            <strong>Stock Disponible:</strong> {detalle.stock}
          </p>

         
          <div className="detail-actions">
            {purchase ? (
              <Link to='/cart' className="btn-terminar">
                Terminar compra
              </Link>
            ) : (
              <ItemCount stock={detalle.stock} onAdd={onAdd} initial={1} />
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;