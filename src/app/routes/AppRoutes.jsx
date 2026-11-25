import React, { useEffect } from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import DashboardLayout from '../Layouts/DashboardLayout'
import LoginPage from '../../features/auth/ui/pages/LoginPage'

import Home from '../../features/dashboard/ui/pages/Home'
import Register from '../../features/auth/ui/pages/RegisterPage'
import Login from '../../features/auth/ui/pages/LoginPage'
import { useDispatch } from 'react-redux'
import { currentLoggedInUser } from '../../features/auth/state/authAction'
import PublicRoutes from './ProtectedRoutes/PublicRoutes'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'
import commonRoutes from './commonRoutes'
import RoleBaseRoute from './ProtectedRoutes/RoleBaseRoute'
import { adminRoutes } from './adminRoutes'
import { employeeRoutes } from './employeeRoutes'

const AppRoutes = () => {
let dispatch = useDispatch()

    useEffect(()=>{
        (()=>{
            dispatch(currentLoggedInUser())
        })()
    },[])

        
let router = createBrowserRouter([
    {
        path:"/",
       element:<PublicRoutes/>,
       children:[
        {
         element:<AuthLayout/>,
        children:[
            {
                path:"",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
        }
       ]
    },

    {
        path:"/home",
        element:<ProtectedRoute/>,
        children:[
            {
            element:<DashboardLayout/>,
             children:[
                ...commonRoutes,
                {
                    element:<RoleBaseRoute allowedRoles={['admin']}/>,
                    children:adminRoutes
                },
                {
                    element:<RoleBaseRoute allowedRoles={['employee']}/>,
                    children:employeeRoutes
                }
             ]
            }
        ]
    }
])

  return <RouterProvider router={router}/>
}

export default AppRoutes
