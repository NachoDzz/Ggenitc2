import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
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
        
        const docRef= doc(db, "productos", itemId)
        getDoc(docRef)
            .then(doc => {
                setItem({id: doc.id, ...doc.data()})
                
            })
            .finally( ()=>{
                setLoading(false)
            })


    }, [itemId])

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