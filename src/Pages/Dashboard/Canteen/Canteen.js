import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CartModal from '../../Account/CartModal/CartModal';
import Footer from '../../Home/Footer/Footer';
import Topbar from '../../Home/Topbar/Topbar';
import Navbar from '../../Shared/Navbar/Navbar';
import Items from './Items/Items';

const Canteen = (props) => {
  
    const navigate=useNavigate();
    const [clicked,setClicked]=useState(false);
    const firstProduct=()=>{
       
          props.setName("morning-brakers");
          setClicked(true)
                   

    }
    const secondProduct=()=>{
          // setUrl("kfc");
          props.setName("kfc");
                 
                    setClicked(true)


    }
    const thirdProduct=()=>{
          // setUrl("oitijjo-ana");
          props.setName("oitijjo-ana");
             
           setClicked(true)


    }
    const fourthProduct=()=>{
          // setUrl();
          props.setName("chile-kotha");
                 
             setClicked(true)


    }


  return (
    <>
    <Topbar/>
    <Navbar/>
    <CartModal/>
    <div className="bg-white">
  <div className="pt-6">
   
   {  !clicked ? <div  className="mx-auto   cursor-pointer  mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div onClick={firstProduct} className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Two 
        each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center"/>
        <h2 className='text-orange-500'>Morning Brakers</h2>
      </div>
      <div  className="hidden  cursor-pointer  lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div onClick={secondProduct} className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center"/>
          <h2 className='text-orange-500'>KFC</h2>
        </div>
        <div onClick={thirdProduct} className="aspect-w-3  cursor-pointer aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center"/>
        </div>
      </div>
      <div onClick={fourthProduct} className="aspect-w-4 cursor-pointer aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center"/>
      </div>
    </div> : 
    
    <Items name={props.name}/>
    }

   
  </div>
</div>
      <Footer/>
    </>
  
  )
}

export default Canteen