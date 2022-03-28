import React from 'react'
import {Card, Button} from 'react-bootstrap'

const ItemCard = ({producto}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCard