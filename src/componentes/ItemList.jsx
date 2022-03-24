import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({listaProductos}) => {
    return (
        <div className='d-flex flex-row'>
            {listaProductos.map((producto) => <ItemCard producto={producto}/>)}
        </div>
    )
}

export default ItemList