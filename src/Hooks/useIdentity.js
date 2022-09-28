import React, { useEffect, useState } from 'react'

const useIdentity = () => {
    const [products,setProducts]=useState(null);
    let init=0;
    useEffect(()=>{
        const fetchProduct=async()=>{
         const result=await fetch('https://uiu-canteen.herokuapp.com/products');
         const data=await result.json();
         setProducts(data);
       
        }
        fetchProduct();
     },[])
   
     if(products){
        for(const singlePd of products){
            if(singlePd.key > init){
                init=singlePd.key
            }
          }
     }
      
     return {
        prokey:init
     }
}


export default useIdentity