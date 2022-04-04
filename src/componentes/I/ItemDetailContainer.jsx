import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../mocks/fakeApi'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then((res)=> {
                setItem(res.find((prod)=> prod.id === Number(itemId)))
            })
        .finally(()=> {
            setLoading(false)
        })

    }, [])

    return (
        <Container>
            {
                loading
                ? <h2>cargando...</h2>
                : <ItemDetail {...item} />
            }

        </Container>
    )
}

export default ItemDetailContainer