 import { createContext, useState } from "react";
//creamos el contexto y lo exportamos
 export const CartContext = createContext();

 //crear provedor

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const valorDelContexto = {

    }
    //todas las funciones/funcionalidades que modifiquen el carrito
    return(
        <>
        <CartContext.Provider value={{cart}} >
            {children}
        </CartContext.Provider>        
        </>
    )
}