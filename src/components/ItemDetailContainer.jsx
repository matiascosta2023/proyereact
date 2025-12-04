import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/AsyncService'

const ItemDetailContainer = () => {
 
    const [detalle, setDetalle] = useState({})
    useEffect(() => {
        getOneProduct(2)
        .then((res) => setDetalle(res))
        .catch((err) => console.log(err))
    },[])

  return (
    <>
    <ItemDetail detalle={detalle}/>
    </>
  )
}

export default ItemDetailContainer