import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import { loginEmployee } from '../state/authAction'
import { api } from '../../../config/apiInstance'

export  const useAuth = () => {

let dispatch = useDispatch()

      const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

   const onRegisterSubmit = async  (data) => {
    console.log("Register Data:", data);

   let user = await api.post('/auth/register',data);
   console.log(user)
    reset()

  };
   const onLoginSubmit = (data) => {
   
    dispatch(loginEmployee(data));
      reset()


  };

  let nav = useNavigate();

  return{
    register,
    handleSubmit,
    errors,
    control,
    nav,
    onRegisterSubmit,
    onLoginSubmit
    
  }
}