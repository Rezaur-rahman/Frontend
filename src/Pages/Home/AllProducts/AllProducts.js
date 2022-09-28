import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './AllProducts.css'
import { BallTriangle } from 'react-loader-spinner';


import SingleProduct from '../SingleProduct/SingleProduct';
import {  faSort } from '@fortawesome/free-solid-svg-icons';


const AllProducts = () => {
    const [allProducts,setAllProducts]=useState(null);
    const [filteredProducts,setFilteredProducts]=useState(null);
    const [filterOption,setFilterOption]=useState(false);
    useEffect(()=>{
       const fetchProduct=async()=>{
        const result=await fetch('https://uiu-canteen.herokuapp.com/products');
        const data=await result.json();
        setAllProducts(data);
        setFilteredProducts(data);

        
       }
       fetchProduct();
    },[])
    // (searchText);

    const handleSearchOption=(e)=>{
        // ('mah',searchText);
        const searchText=e.target.value;
       const matchedProducts=allProducts?.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
   
       setFilteredProducts(matchedProducts);
   
    }

   if(!allProducts){
       return  <div className='flex justify-center mx-auto my-40'>
         <BallTriangle
       height={100}
       width={100}
       radius={5}
       color="#4fa94d"
       ariaLabel="ball-triangle-loading"
       wrapperClass={{}}
       wrapperStyle=""
       visible={true}
       /> 
       </div>
   }

  

    return (
        <div style={{backgroundColor:'#ffe7e763'}} className="mb-5 pb-5">
            <h3 className='text-2xl ml-3 md:ml-9 mt-9 text-center border-b-4 border-orange-500 pb-4 w-40 mx-auto flex justify-center  pt-9'>Most Popular</h3>
           <div className='flex pt-9 mx-auto justify-center'>
            
           <div className='col-span-2 mt-5 hidden md:inline-block'>
                   <input onChange={handleSearchOption} className='bg-grey-100  py-1.5 px-5 border-2 rounded tracking-wider border-yellow-500 focus:border-yellow-500 h-9 w-72 shadow' type="text" placeholder='I`m looking for...'/>
                                               
               </div>
           </div>
            
        
        
            <div style={{maxWidth:"1200px",margin:"0 auto"}} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {
                filteredProducts?.map(singleProduct=><SingleProduct key={singleProduct._id} singleProduct={singleProduct}/>)
            }
        </div>
        </div>
    );
};

export default AllProducts;