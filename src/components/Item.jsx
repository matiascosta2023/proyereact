import React from "react";
import '../css/card.css'
import { Link } from "react-router-dom";
const Item = ({ prod  }) => {
  const { nombre, precio, descripcion } = prod;
 
  return (
    
    <div className="card">
      <img src={prod.img} alt={nombre} className="card-img" />

      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-price">${precio}</p>
        <Link className="card-btn" to={`/item/${prod.id}`}  >Ver Detalles</Link  >
         
      </div>
    </div>
  );
};

export default Item;