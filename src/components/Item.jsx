import React from "react";
import '../css/card.css'

const Item = ({ prod  }) => {
  const { nombre, precio, descripcion } = prod;
 
  return (
    
    <div className="card">
      <img src={prod.img} alt={nombre} className="card-img" />

      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-price">${precio}</p>
        <button>Ver Detalles</button>
         
      </div>
    </div>
  );
};

export default Item;