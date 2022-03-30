import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { getProducts } from '../mocks/fakeApi'
import { useParams } from 'react-router-dom'




const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando ] = useState(false)

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect (()=>{
        setCargando(true)
        getProducts
        .then((res) => {
            if(categoryId){
                setListaProductos(res.filter((prod)=> prod.category === categoryId ))
            }else {
                setListaProductos(res)
            }

        })
        .catch((error) => console.log(error) )
        .finally(()=> setCargando(false))
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