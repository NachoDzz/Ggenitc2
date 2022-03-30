import React from 'react'
import {Contador} from './Contador'


const ItemDetail = ({ productDetail }) => {
    const { name, description, img } = productDetail
    console.log(productDetail);
    return (
        <div className='m-auto w-50 rounded' style={{ backgroundColor: '#8f8d90', }}>
            <div className='d-flex align-items-center justify-content-center'>
                <div>
                    < img src={img} alt={name} className='rounded' style={{ height: '25rem', width: '18rem' }} />
                </div>
                <div className='justify-content-center App'>
                    <p>{description}</p>

                    <div >

                    <Contador nombre={(name)} stock={(productDetail.stock)} initial={(1)} onAdd={(productDetail.onAdd )}  />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ItemDetail