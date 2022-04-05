

const ItemCount = ({ max = 12,cantidad, setCantidad, onAdd }) => {


    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className='my-5 d-flex flex-column aling-item-center justify-content-center'>
            <div>
                <button className='btn btn-primary' onClick={handleRestar}>-</button>
                <span className='mx-3' >{cantidad}</span>
                <button className='btn btn-primary' onClick={handleSumar}>+</button>
            </div>
            <div>
                <button className='btn btn-primary my-3' onClick={onAdd} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount