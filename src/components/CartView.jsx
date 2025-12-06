import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const {cart,removeItem, clear} = useContext(CartContext)
  return (
    <div>
        <h1>Tu Carrito</h1>
        <div>
            {
              cart.map((compra) => (
                    <div key={compra.id}>
                         <img src={compra.img} alt={compra.nombre}></img>
                        <span>{compra.nombre} </span>
                        <span>${compra.precio}</span>
                       <span>Cantidad pedida {compra.quantity},00</span>
                        <span>Precio total ${compra.quantity * compra.precio},00</span>
                        
                        <button onClick={() => removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
            <span>Total a pagar: $</span>
            <div>
                <button onClick={clear} >Vaciar Carrito</button>
                <button>Terminar Compra</button>
            </div>
    </div>
  )
}

export default CartView