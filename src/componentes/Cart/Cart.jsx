import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'

const Cart = () => {

    const {cart, cartTotal, vaciarCart, removeItem} = useContext(CartContext)

    console.log(cart);




    return (
        <div className='container my-5'>

            <h2 className='h2-c App fw-bold text-uppercase'>tu carrito </h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <h5>precio $:{item.precio} x{item.cantidad}</h5>
                        <span>precio total: ${item.precio * item.cantidad}</span>
                        <button className='btn btn-danger mx-3' onClick={() => removeItem(item.id)}><BsFillTrashFill/></button>
                        <hr />
                    </div>


                ))
            }

            <h3>TOTAL: ${cartTotal()}</h3>
            <hr />
            <button className='btn btn-danger' onClick={vaciarCart}> vaciar carrito</button>

        </div>
    )
}

export default Cart