import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { getProducts } from '../mocks/fakeApi'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'




const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando ] = useState(false)

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect (()=>{
        setCargando(true)

        // 1.- Armar la referencia
        const productosref = collection(db, "productos")
        //2.- lamar (async) a esa referencia
        getDocs(productosref)
            .then(resp => {
                const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                console.log(items)
                setListaProductos(items)
            })
            .finally(()=> {
                setCargando(false)
            })
            

    },[categoryId])




    return (
        <div>
            {cargando ?
            <p>
                cargando...
            </p> : ''}
            <ItemList listaProductos={listaProductos}/>
        </div>
    )
}

export default ItemListContainer