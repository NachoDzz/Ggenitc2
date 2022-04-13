import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'

const CartWidget = () => {

    const {cartCantidad} = useContext(CartContext)

  return (
    <Link to={"/cart"} className="me-5  ">

        <BsFillCartFill/>
        <span>{cartCantidad() || ""}</span>

    </Link>
  )
}

export default CartWidget