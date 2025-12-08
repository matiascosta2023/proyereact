import React, { useContext, useState } from 'react'
import {CartContext} from '../context/CartContext'
import { serverTimestamp } from 'firebase/database'
import {db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import EmptyCart from './EmptyCart'

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [secondMail, setSecondMail] = useState('')
  const {cart, total, clear} = useContext(CartContext)
  const [error, setError] = useState(null)
  const [orderId, setOrderId] = useState(null)
    const buyerData = () => {
      setBuyer(
        {
          ...buyer,
          [e.target.name]:e.target.value
        }
      )
    }
    const finalizarCompra = (e) => {
      e.preventDefault()
      if(!buyer, name || !buyer.lastname || !buyer.mail || buyer.address){
        setError('Complete los campos obligatorios')
      }else if(buyer.mail !== secondMail){
        setError('Correos Distintos, volver a repetir')
      }else{
        setError(null)
      let order = {
        comprador: buyer,
        compras: cart,
        total: total(),
        fecha: serverTimestamp()
      }
      const ventas = collection(db, "orders")

      //agregar doc
      addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id)
        clear()
      })
      .catch((err => console.log(err)))
      }
 
    }
      if(!cart.lenght && !orderId){
        return <EmptyCart/>
      }
  return (
 <>
 {orderId 
  ? <div><h2>Muchas Gracias por su compra</h2>
    <h4>Su orden es: {orderId}</h4>
    <Link to={'/'}>Home</Link>
  </div>
  :
      <div> 
        <h1>Complete con sus datos para el envio</h1>
      {error && <span style={{color:'red'}}>{error}</span>}
        <form className='form' onSubmit={finalizarCompra}>
        <input type="text" name='name' placeholder='Ingresa tu nombre' onChange={buyerData} />
        <input type="text" name='lastname' placeholder='Ingresa tu apellido' onChange={buyerData}/>
        <input type="text" name='addres' placeholder='Ingresa tu direccion' onChange={buyerData}/>
        <input type="email" name='mail' placeholder='Ingresa tu correo' onChange={buyerData} />
        <input type="email" name='secondmail' placeholder='Repeti tu correo' onChange={(e) => setSecondMail(e.target.value)} />
        <button type='submit' >Completar Compra</button>
        </form>

    </div>

 
 }
 
 
 </>
  )
}

export default Checkout