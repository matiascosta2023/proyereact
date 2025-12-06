import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import '../css/detail.css'
//importo el context que quiero utilizar
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const ItemDetail = ({ detalle }) => {
  const { cart, addItem } = useContext(CartContext);
 


//recomendacion mejores practicas

const [purchase, setPurchase] = useState(false)
  // const onAdd = (cantidad) => {
  //   console.log(`agregaste ${cantidad} al carrito`);
  //   addItem(detalle, cantidad)
  //   setQuantity(cantidad)
  // };
 const onAdd = (cantidad) => {
    console.log(`agregaste ${cantidad} al carrito`);
    setPurchase(true)
    addItem(detalle, cantidad)
  
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
          <p>
            <strong>Categoría:</strong> {detalle.categoria}
          </p>

          <p>
            <strong>Descripción:</strong> {detalle.descripcion}
          </p>

          <p className="precio">
            <strong>Precio: </strong> ${detalle.precio}
          </p>

          <p>${detalle.categoria}</p>
          <p>Stock Disponible: {detalle.stock}</p>
          {/* {cuantityadded !== 0 ? <button>Terminar compra</button>: <ItemCount stock={detalle.stock} onAdd={onAdd} />  
        } */}
         {purchase ? <Link to='/cart'>Terminar compra</Link>: <ItemCount stock={detalle.stock} onAdd={onAdd} />  
        }
         
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
