import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const cartCantidad = () => {
        return cart.length
    }


    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cartCantidad
        }}>

            {children}

        </CartContext.Provider>
    )
}
