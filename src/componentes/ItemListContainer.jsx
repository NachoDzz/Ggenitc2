import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { getProducts } from '../mocks/fakeApi'




const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando ] = useState(false)

    useEffect (()=>{
        setCargando(true)
        getProducts
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error) )
        .finally(()=> setCargando(false))
    },[])

    console.log(listaProductos);


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