import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, stock, precio, name, description, img }) => {

    const { cart, addItem, isInCart} = useContext(CartContext)

    console.log(isInCart(id));

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = (cantidad) => {
        const itemToAdd = {
            id,
            name,
            precio,
            img,
            cantidad
        }

        addItem(itemToAdd)

    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div><img src={img} alt={description} style={{ height: '25rem' }} /></div>
            <div className='App'>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>${precio}</h3>
                <small>stock: {stock}</small> <br />
                <button className='btn btn-primary mt-4' onClick={handleNavigate}> volver </button>

                {
                    !isInCart(id)
                        ?   <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={agregarAlCarrito}
                    />
                    : <Link to={"/cart"} className="btn btn-success mb-4 d-block my-3" > terminar mi compra</Link>
                }



                
            </div>



        </div>
    )
}

export default ItemDetail