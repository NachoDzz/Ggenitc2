import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)

    console.log(cart);




    return (
        <div className='container my-5'>

            <h2>tu carrito</h2>
            <hr />

            {
                cart.map((item) => (
                    <div>
                        <h4>{item.name}</h4>
                        <h5>precio $:{item.precio}</h5>
                        <hr />
                    </div>


                ))
            }

        </div>
    )
}

export default Cart