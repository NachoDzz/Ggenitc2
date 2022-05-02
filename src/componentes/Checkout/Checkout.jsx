import React, { useContext, useState } from 'react'
import {CartContext} from "../../contexts/CartContext"
import {db} from "../../firebase/config"
import {getDocs, query, where,documentId, writeBatch ,collection, addDoc, Timestamp, doc, updateDoc, getDoc } from 'firebase/firestore'
import { Navigate, Link } from 'react-router-dom'


const Checkout = () => {

    const {cart, cartTotal, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre:'',
        email:''
    })

    const handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }


    
    const handleSumbit = async (e) => {
        e.preventDefault()

        const orden = {
            items: cart, 
            total: cartTotal(),
            comprador: {
                ...values
            },
            fyh: Timestamp.fromDate(new Date())
        }

    
        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map((item)=> item.id)))

        const productos = await getDocs(q)

        const outOfstock = []

        productos.docs.forEach((doc) => {
            const ItemInCart = cart.find((item) => item.id === doc.id)

            if (doc.data().stock >= ItemInCart.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - ItemInCart.cantidad
                })
            } else {
                outOfstock.push(ItemInCart)
            } 
        })

        if (outOfstock.length === 0) {
            batch.commit()
            addDoc(ordersRef, orden)
                .then((doc)=>{
                    setOrderId(doc.id)
                    vaciarCart()
            } )
        }else{
            alert('no hay stock')
        }




    }

    if (orderId) {
        return <div className='container my-5'>
            <h2>tu orden se registro!! gracias por la compra</h2>
            <hr />
            <h4>tu numero de orden es: {orderId}</h4>
            <Link to="/" className='btn btn-primary'>volver al inicio </Link>
        </div>
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }
        

    return (
        <div className='container '>Checkout
            <hr />
            <form onSubmit={handleSumbit}>
                <input type="text" className='form-control my-2 ' placeholder='Nombre' value={values.nombre} 
                name='nombre'
                onChange={handleInputChange}
                />
                <input type="email" className='form-control my-2 ' placeholder='Email' value={values.email} 
                name='email'
                onChange={handleInputChange} 
                />
                

                <button className='btn btn-success' type='sumbit'> enviar</button>

            </form>

        </div>
    )

    
}

export default Checkout