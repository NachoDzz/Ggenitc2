import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, cartTotal, vaciarCart, removeItem } = useContext(CartContext)

    console.log(cart);
    console.log(cart.length);

    if (cart.length === 0) {
        return  <div>
                    <h2>tu carrito esta vacio</h2>
                    <br />
                    <Link to={"/"} className="btn btn-primary" >volver</Link>
                </div>
    }




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
                        <button className='btn btn-danger mx-3' onClick={() => removeItem(item.id)}><BsFillTrashFill /></button>
                        <hr />
                    </div>


                ))
            }

            <h3>TOTAL: ${cartTotal()}</h3>
            <hr />
            <button className='btn btn-danger' onClick={vaciarCart}> vaciar carrito</button>
            <Link to="/checkout" className='btn btn-success mx-3' > terminar mi compra</Link> 



        </div>
    )
}

export default Cart