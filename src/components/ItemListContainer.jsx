import React, { useEffect, useState } from 'react';
import '../css/hero.css'; 
import { getProducts, productos } from '../mock/AsyncService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, getDocs, where, query, addDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
const ItemListContainer = (props) => {
  const { type } = useParams();
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  
  const banners = {
    "Notebooks": "https://i.postimg.cc/BZwShW4f/banner-notebook.jpg",
    "PCs": "https://i.postimg.cc/43f2FQCL/3d663f6a-6fc0-4211-9a1a-ca32d6d759ab.jpg"
    
  };
  const imgFondo = banners[type]; 
//firebase

  useEffect(() => {
    setLoader(true);
    //conectamos con nuestra coleccion
    const productColeccion = type 
    ? query(collection(db, "productos"), where("category","==",type))
    :collection(db, 'productos')
    //pedir doc
    getDocs(productColeccion)
    .then((res) => {
      console.log(res.docs)

      //Limpiar y obtener datos

      const list = res.docs.map((doc) => {
        return{
          id:doc.id,
          ...doc.data()
        }
      })
      // console.log(list)
      setData(list)
    })

    .catch((err) => console.log(err))
    .finally(() =>setLoader(false))
  },[])



  // useEffect(() => {
  //   setLoader(true)
  //   getProducts()
  //     .then((res) => {
  //       if (type) {
  //         setData(res.filter((prod) => prod.categoria === type));
  //       } else {
  //         setData(res);
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(()=> setLoader(false))
  // }, [type])
    // const subirData= () => {
    //   console.log('subiendo data')
    //   const prodSubir = collection(db, 'productos')
    //   productos.map((prod) => addDoc(prodSubir, prod))
    // }
  return (
    <>
    {/* se usa una sola vez */}
    {/* <button onClick={subirData}>Subir data</button> */}
    {
      loader ? <LoaderComponent/>
      : <div>
     
     
      {imgFondo && (
        
        <div 
          style={{
        
            backgroundImage: `linear-gradient(rgba(1, 27, 99, 0.6), rgba(0, 0, 0, 0.6)), url('${imgFondo}')`,
            height: '450px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0 0 20px 20px',
          }}
        >
           <h1 style={{ 
               color: '#fff', 
               fontSize: '6rem', 
               textTransform:'uppercase',
               fontWeight: 'bold',
               textShadow: '2px 2px 4px rgba(0,0,0,0.7)' 
           }}>
             {type}
           </h1>
        </div>
      )}

      <ItemList data={data} />
    </div>
    }
    </>
     
  );
};

export default ItemListContainer;