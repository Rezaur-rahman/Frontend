import React, { useState } from 'react'

const AddProduct = () => {
    const [newProductInfo,setNewProductInfo]=useState({
        name:'',
        description:'',
        price:'',
        deliverycharge:'',
        image:''
    })

    const handleProductInfo=e=>{

    }
    const handleFormSubmit=e=>{
        e.preventDefault();
    }
  return (
    <div className='flex mx-auto justify-center mt-20'>
        <form onSubmit={handleFormSubmit} className='flex flex-col'>
            <input name="name" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="text" placeholder='Product Name'/>
            <input name="description" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="text" placeholder='Product Description'/>
            <input name="price" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="number" placeholder='Product Price'/>
            <input name="deliverycharge" onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="number" placeholder='Delivery Charge'/>
            {/* <input  onBlur={handleProductInfo} className='my-3 border px-5 py-2' type="file" /> */}
            <input name="" className='my-3 border px-5 py-2 bg-yellow-400' type="submit" />
            
        </form>
    </div>
  )
}

export default AddProduct