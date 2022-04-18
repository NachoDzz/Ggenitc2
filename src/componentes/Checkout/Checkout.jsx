import React, { useContext, useState } from 'react'
import {CartContext} from "../../contexts/CartContext"


const Checkout = () => {

    const {cart, cartTotal} = useContext(CartContext)
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


    
    const handleSumbit = (e) => {
        e.preventDefault()

        const orden = {
            items: cart, 
            total: cartTotal(),
            comprador: {
                ...values
            }
        }
        console.log(orden);
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