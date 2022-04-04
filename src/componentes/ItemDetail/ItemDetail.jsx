import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({ id, stock, name, description, img }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div><img src={img} alt={description} style={{ height: '25rem' }} /></div>
            <div className='App'>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <small>stock: {stock}</small> <br />
                <button className='btn btn-primary mt-4' onClick={handleNavigate}> volver </button>
            </div>



        </div>
    )
}

export default ItemDetail