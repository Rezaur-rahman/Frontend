import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'


const Topbar = () => {
    return (
        <div className='flex justify-around bg-orange-400 items-center py-0.5'>
             <div>
                 <h6 className='text-xs font-semibold'>Get Free Delivery Within 15 Minutes</h6>
             </div>
             <div>
             <FontAwesomeIcon icon={faPhone} className="text-xs "/> &nbsp;
             <span className='text-xs '>016777753(10am-10pm)</span>
             </div>
        </div>
    );
};

export default Topbar;