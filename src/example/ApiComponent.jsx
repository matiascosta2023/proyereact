import React, { useEffect, useState } from 'react'
import ApiList from './ApiList'

const ApiComponent = () => {
  
  const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/laptops')
        .then((res) => res.json())
        .then((response) =>  setPersonajes(response.products)) //guardo respuesta
        .catch((err) => console.log("ERROR:", err))
    },[])
    console.log(personajes)

  return (
    <div>
      
      {/* {personajes.map((pj) => <p key={pj.id}>{pj.name}</p>)} */}
      <ApiList personajes={personajes}/>
    
    
    </div>

  )
}

export default ApiComponent

        