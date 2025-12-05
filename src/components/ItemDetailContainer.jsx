import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/AsyncService'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
 const {id} = useParams()

    const [detalle, setDetalle] = useState({})
    useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetalle(res))
        .catch((err) => console.log(err))
    },[id])

  return (
    <>
    <ItemDetail detalle={detalle}/>
    </>
  )
}

export default ItemDetailContainer