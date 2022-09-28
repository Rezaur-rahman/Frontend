import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import ManageAllOrders from '../Account/LoginModal/ManageAllOrders/ManageAllOrders';
import OrderHistory from '../Account/LoginModal/OrderHistory.js/OrderHistory';
import AddProduct from './AddProduct/AddProduct';
import Products from './Products/Products';
import ManageRole from '../Dashboard/ManageRole/ManageRole'
import Items from './Canteen/Items/Items';

const Dashboard = () => {
    const navigate=useNavigate();
    const {logOut,user,admin,seller}=useAuth();
    const handleLogout=()=>{
        logOut();
        navigate('/');
    }

    console.log(user,seller,admin);
  return (
    <div className='grid  grid-cols-7'>
      <div className='col-span-2 bg-slate-300'>
          <div>
            <ul className='mt-12 text-center h-screen'>
                <li onClick={()=>navigate('/')} className='my-9 hover:bg-orange-400 hover:cursor-pointer px-14 py-4'>Home</li>
             
              <NavLink to="/dashboard/my-orders">My Orders</NavLink>
             
              { admin && <div className='my-9'><NavLink  to='/dashboard/all-orders'>All Orders</NavLink></div>}
              { (admin || seller) && <div className='my-9'><NavLink  to='/dashboard/add-products' >Add Products</NavLink>  </div> }
              { (admin ) && <div className='my-9'><NavLink  to='/dashboard/all-products' >All Products</NavLink>  </div> }
              { (admin ) && <div className='my-9'><NavLink  to='/dashboard/update-role' >Update Role</NavLink>  </div> }
                <li onClick={handleLogout} className='my-9 hover:bg-orange-400 hover:cursor-pointer px-14 py-4'>Log Out</li>
            </ul>
          </div>
      </div>
      <div className='col-span-5'>
           <Routes>
            <Route path='/my-orders' element={<OrderHistory/>}/>
            <Route path='/all-orders' element={<ManageAllOrders/>}/>
            <Route path='/add-products' element={<AddProduct/>}/>
            <Route path='/all-products' element={<Products/>}/>
            <Route path='/update-role' element={<ManageRole/>}/>
           </Routes>
      </div>
    </div>
  )
}

export default Dashboard