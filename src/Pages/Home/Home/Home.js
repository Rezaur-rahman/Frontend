
import React from 'react';
import LoginModal from '../../Account/LoginModal/LoginModal';
import Navbar from '../../Shared/Navbar/Navbar';
import AllProducts from '../AllProducts/AllProducts';

import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';
import CartModal from '../../Account/CartModal/CartModal';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
         <Topbar/>
       <Navbar/>

            <LoginModal />
            <CartModal/>
            <Banner/>
            <AllProducts/>
            <Footer/> 
        </div>
    );
};

export default Home;