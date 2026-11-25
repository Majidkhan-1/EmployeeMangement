import React from 'react'
import {NavLink,Navigate} from 'react-router'
import NavigationTab from './NavigationTab'
import { useSelector } from 'react-redux'
import { adminNavigations, employeeNavigations } from '../../../../app/constants/navigations'

const AsideNav = () => {
let {employee} = useSelector(store =>store.auth);

const role = employee?.role?.toLowerCase();
let navigations = role === "admin" ? adminNavigations : employeeNavigations;

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-3 '>
            <h1 className='text-3xl font-semibold text-[#CAB8F9]'>Team-sync</h1>
            <p className='text-sm text-[var(--text-secondary)]'>Enterprises workspace</p>
   
        </div>
        <div className='flex flex-col gap-3 '>
          {
            navigations.map((route,indx)=>{

              return <NavigationTab key={indx} path={route.path} title={route.title} Icon={route.icon}/>
            })
          }
        </div>
        
      
    </div>
  )
}

export default AsideNav
