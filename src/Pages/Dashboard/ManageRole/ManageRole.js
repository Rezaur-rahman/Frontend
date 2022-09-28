import React, { useState } from 'react'

const ManageRole = () => {
    const [email,setEmail]=useState('');
    const [role,setRole]=useState('user');

    const updateUserRole=()=>{
          fetch('https://uiu-canteen.herokuapp.com/users',{
            method:'PUT', 
            headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({email,role})
      }).then(res=>res.json())
      .then(data=>{if(data.acknowledged){
        alert('role updated')
      }})

        
    }
  return (
    <div className='flex flex-col justify-center h-full items-center mx-auto'>
        <div className='my-5'>
            <input onBlur={(e)=>setEmail(e.target.value)} className='border-2 px-5 py-2' type="email" placeholder="user email" /> <br/>
           <div className='pt-4'>
           <label for="role" > Select Role : </label>
        <select onChange={(e)=>setRole(e.target.value)} className='bg-slate-400' name="role" id="role" >
  <option value="user">USER</option>
  <option value="seller">SELLER</option>
  <option value="admin">ADMIN</option>
</select>
           </div>
   
        </div>
        <div>
        <button onClick={updateUserRole} className='bg-yellow-500 px-4 py-1 rounded-xl'>Update Role</button>
        </div>
    </div>
  )
}

export default ManageRole