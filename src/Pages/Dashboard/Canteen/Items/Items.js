import React, { useEffect, useState } from 'react'
import Footer from '../../../Home/Footer/Footer'
import Topbar from '../../../Home/Topbar/Topbar'
import Navbar from '../../../Shared/Navbar/Navbar'
import Display from '../display/Display'

const Items = ({name}) => {
  console.log('eta faisi',name);
  const [filterProducts,setFilterProducts]=useState(null);
  useEffect(()=>{
    const fetchProduct=async()=>{
     const result=await fetch('https://uiu-canteen.herokuapp.com/products');
     const data=await result.json();
     const filterData=data.filter(thatguy=>thatguy.seller === name)
    
     setFilterProducts(filterData);
     
     
    }

    fetchProduct();
 },[])

 console.log('filter kora data',filterProducts);
  return (
    <div>
       
        <div style={{maxWidth:"1200px",margin:"0 auto"}} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '> {
                filterProducts?.map(singleProduct=><Display key={singleProduct._id} singleProduct={singleProduct}/>)
            } </div> 
     
    </div>
  )
}

export default Items