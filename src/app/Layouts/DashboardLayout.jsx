import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Outlet} from "react-router"
import AsideNav from '../../features/dashboard/ui/components/AsideNav';
import Navbar from '../../features/dashboard/ui/components/Navbar';

const DashboardLayout = () => {

  let { mode } = useSelector((store) => store.theme);
  

  useEffect(()=>{
    if( mode === "light"){

       document.body.classList.add('light');

    }else{

      document.body.classList.remove('light');

    }
  },[mode])
  
  return (
    <div className='h-screen grid grid-cols-[1fr_8fr]'>

      <div className='border-r border-blue-800 p-3'> <AsideNav/> </div>

      <div className='flex flex-col gap-8 p-3 overflow-auto'>
    
        <Navbar/>
      <div className='overflow-auto h-full'>
         <Outlet/>
       </div>  
      </div>

    </div>
  )
}

export default DashboardLayout
