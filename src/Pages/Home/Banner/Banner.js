import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import './Banner.css'
const Banner = () => {
  const {seller,admin}=useAuth();
  const navigate=useNavigate();
  return (
    <div>
        <div className='banner-container'>
           <div className='flex h-full justify-center items-center mx-auto'>
           <div>
          { (seller || admin)?  <h3 className='text-xl md:text-4xl  text-white text-bold'>Sell food at ease. Get order and Deliver</h3>
          :
          <h3 className='text-xl md:text-4xl  text-white text-bold'>ORDER  and  GET YOUR FOOD IN A MINUTE</h3>  
        }
          { (seller || admin)?   <p className='text-sm md:text-lg text-slate-200 text-center my-3'>Upload the picture of the food and take orders. Delivery inside versity.</p> : <p className='text-sm md:text-lg text-slate-200 text-center my-3'>Order from any canteen, get delivery on your desired room in a minute.</p>}
           <div className='flex mx-auto justify-center mt-5'>
          { (seller || admin)? <button className='bg-orange-400 text-white px-7 py-1.5 rounded-2xl' onClick={()=>navigate('/dashboard/add-products')}>Add New Dish</button>  : <button className='bg-orange-400 text-white px-7 py-1.5 rounded-2xl'>Explore Canteen</button>}
           </div>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Banner