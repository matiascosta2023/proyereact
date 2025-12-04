import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalle }) => {
  return (
    <div className="item-detail">

      <h1>Detalle de: {detalle.nombre}</h1>

      <div className="item-detail-content">

        <img 
          src={detalle.img} 
          alt={detalle.nombre} 
          className="item-detail-img"
        />

        <div className="item-detail-info">

          <p><strong>Categoría:</strong> {detalle.categoria}</p>

          <p><strong>Descripción:</strong> {detalle.descripcion}</p>

          <p className="precio"><strong>Precio:</strong> ${detalle.precio}</p>

            <p>${detalle.categoria}</p>
          <ItemCount stock={detalle.stock} />

        </div>

      </div>

    </div>
    
  )
      
console.log("ID de la URL:", id, "Tipo:", typeof id);
}

export default ItemDetail
