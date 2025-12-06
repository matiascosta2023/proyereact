 import { createContext, useState } from "react";
//creamos el contexto y lo exportamos
 export const CartContext = createContext();

 //crear provedor

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const valorDelContexto = {

    }
    //todas las funciones/funcionalidades que modifiquen el carrito
    //Agregar un item al carrito
    const addItem = (item, qty) => {
        if(isInCart(item.id)){
            const carritoActualizado = cart.map((prod) => {
                if(prod.id === item.id){
                    //si es asi, se actualiza
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //todos los que restan los voy a devolver sin modificar
                    return prod
                }
            })
            setCart(carritoActualizado)
            //existe, sumo cantidad
            console.log('ya esta en el carrito')
        }else{
            setCart([...cart,{...item, quantity:qty}])

        }
    }
    //Eliminar Item al carrito

    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    }
    //limpiar carrito
    const clear = () =>{
        setCart([])
    }

    //devuelva un bool si existe o no ese item
    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }

    return(
        <>
        <CartContext.Provider value={{cart, addItem, removeItem, clear}} >
            {children}
        </CartContext.Provider>        
        </>
    )
}