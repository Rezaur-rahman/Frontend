import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CartContext from "./Context/CartContext";
import OffcanvasContext from "./Context/OffcanvasContext";
import ManageAllOrders from "./Pages/Account/LoginModal/ManageAllOrders/ManageAllOrders";
import OrderHistory from "./Pages/Account/LoginModal/OrderHistory.js/OrderHistory";
import Canteen from "./Pages/Dashboard/Canteen/Canteen";
import Items from "./Pages/Dashboard/Canteen/Items/Items";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";

function App() {
  const [name,setName]=useState('');

  console.log(name);
  return (
  <AuthProvider>
    <CartContext>
       <OffcanvasContext>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/canteen" element={<Canteen name={name} setName={setName}/>} />
        {/* <Route path='/canteen/items' element={<Items/>}/> */}

        <Route path="/dashboard/*" element={<Dashboard/>} />
        
         

       


      </Routes>
    </Router>
   </OffcanvasContext>
  </CartContext>
  </AuthProvider>
  );
}

export default App;
