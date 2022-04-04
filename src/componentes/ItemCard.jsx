import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    <Link to={`/detail/${producto.id}`} > <Button variant="primary">ver mas</Button> </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCard