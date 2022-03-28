import React, { useEffect,useState } from 'react'
import { getProducts } from '../mocks/fakeApi'
import ItemDetail from './ItemDetail'

const ItemDetailCont = () => {
    const [productDetail, setProductDetail] = useState({})
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        setLoad(true)
        getProducts
        .then((res) => setProductDetail(res.find((item) => item.id === '03')))
        .catch((error)=> console.log(error))
        .finally(() => setLoad(false))
    }, [])


    return (
        <div>
            {load ? <p>LOADING..</p> : <ItemDetail productDetail={productDetail}/>}
            
        </div>
    )
}

export default ItemDetailCont