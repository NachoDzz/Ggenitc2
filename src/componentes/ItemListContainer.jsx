import React, {useEffect, useState} from 'react'
import gorillaGlue from './../img/gorillaGlue.jpg'
import ItemList from './ItemList'




const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const productos = [
        {id:'01', name:'planta1', description:'Gorilla-Glue0', img:{gorillaGlue} },
        {id:'02', name:'planta2', description:'Gorilla-Glue1', img:{gorillaGlue} },
        {id:'03', name:'planta3', description:'Gorilla-Glue2', img:{gorillaGlue} },
        {id:'04', name:'planta4', description:'Gorilla-Glue3', img:{gorillaGlue} }
    ]

    const getProducts = new Promise ((resolve, reject) => {
        let condition = true 
        if(condition){
            setTimeout(() =>{
                resolve(productos)
            },2000)
        }else{
            reject('nooo, salio todo mal D:')
        }
    })

    useEffect (()=>{
        getProducts
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error) )
    }, [])

    console.log(listaProductos);


    return (
        <div>hola
            <ItemList listaProductos={listaProductos}/>
            <gorillaGlue/>
        </div>
    )
}

export default ItemListContainer