import React, { useEffect, useState } from 'react'
import '../css/hero.css'
import { getProducts } from '../mock/AsyncService';
import ItemList from './ItemList';
const ItemListContainer = (props ) => {
  const [data, setData ] = useState([])
    useEffect(() => {
      getProducts() 
      .then((res) => setData(res))
      .catch((err) => console.log(err)) 
    }, [])



  return (
    <div>
      
     
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer
