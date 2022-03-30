import React from 'react'
import {Card, Button} from 'react-bootstrap'

const ItemCard = ({producto}) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin:'30px 10px'}}>
                <Card.Img variant="top" src={producto.img} style={{height: '25rem'}} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Button variant="primary">ver mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCard