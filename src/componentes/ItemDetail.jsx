import React from 'react'

const ItemDetail = ({productDetail}) => {
    const {name, description } = productDetail
    return (
        <div>
            <h2>Detalles del producto: {name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail