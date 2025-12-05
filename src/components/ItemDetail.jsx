import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
//importo el context que quiero utilizar
import { CartContext } from '../context/CartContext'
const ItemDetail = ({ detalle }) => {
  const {cart} = useContext(CartContext)

const onAdd = (cantidad) => {
  console.log(`agregaste ${cantidad} al carrito`)
}

  return (
    <div className="item-detail">

      

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
          <ItemCount stock={detalle.stock} onAdd={onAdd} />

        </div>

      </div>

    </div>
    
  )
      

}

export default ItemDetail
