import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, stock, precio, name, description, img }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = (cantidad) => {
        const itemToAdd  = {
            id,
            name,
            precio,
            img,
            cantidad
        }

        console.log(itemToAdd);
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
                <ItemCount 
                    max={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={agregarAlCarrito}
                
                />
            </div>



        </div>
    )
}

export default ItemDetail