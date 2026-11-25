import { DatabaseSearchIcon, LucideLayoutDashboard } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title,Icon}) => {
  return (
    <NavLink className={({isActive})=>
        ` flex gap-3 pl-4 py-2  ${isActive ? 'border-r-4 border-[var(--text-primary)] bg-[var(--secondary)]': " "} `
    }
    to={path}
    end='/'>

        <LucideLayoutDashboard size={22}/>
        {title}
    </NavLink>
  )
}

export default NavigationTab