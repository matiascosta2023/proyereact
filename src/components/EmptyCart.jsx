import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div 
      style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100vw',
        height:'100vh'
      }}
    >
      <h1>¡Tu carro está vacío!</h1>
      <Link to="/">Volver a home</Link>
    </div>
  )
}

export default EmptyCart
