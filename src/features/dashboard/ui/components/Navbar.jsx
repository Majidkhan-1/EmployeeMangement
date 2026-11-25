import React from 'react'
import {Bell,Lightbulb,Menu, Moon, Search} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/themeSlice';
import { logoutApi } from "../../../auth/api/logout"
import { removeEmployee } from '../../../auth/state/authSlice';

const Navbar = () => {


  let {mode} = useSelector(store => store.theme);

  
  let dispatch = useDispatch();

  const handleLogout =async ()=>{

    await logoutApi;
    dispatch(removeEmployee())
  }

  const handleDispach = ()=>{
    dispatch(toggleTheme());
  }

  return (
    <div className='flex justify-between items-center'>
     <div className='flex gap-4 items-center w-[50%] rounded bg-[var(--bg-surface)] px-3 py-1.5 border border-gray-500'>
        <Search size={22}/>
        <input className='w-full outline-0' type="text" placeholder='Search workspace.....' />
     </div>
     <div className='flex gap-5 items-center'>
      
     {
      mode === 'light' ?(
        <Moon size={23} onClick={handleDispach}/>
      ):(
        <Lightbulb size={23} onClick={handleDispach}/>
      )
     }

      
        <Bell size={22}/>
        <Menu size={22}/>
        <button
        onClick={handleLogout}
         className='text-white bg-black px-5 cursor-pointer py-2 rounded'>Logout</button>
     </div>
    </div>
  )
}

export default Navbar
