import React, { useState } from 'react'
import logo from '../assets/images/logo-primary.png'
import InputField from '../components/InputField'
import { validateLoginForm } from './UniteFormValidation'
import * as api from '../api/userApi'
import { useDispatch } from 'react-redux';
import {  Login } from '../store/slices/userSlice'
import { intitializeSystemInfo } from '../store/slices/systemSlice'

const LoginForm = () => {

    const [error, setError] = useState({error : false, errorMessage :""})
    const dispatch = useDispatch()


    //handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault()

        // valider les donnees saisis
        // const validationResponse = await validateLoginForm(e.target.email.value)

        // if(validationResponse.error) {
        //   setError(validationResponse)
        // }
        // else{
        //   setError({error : false, errorMessage :""})
          
        //requestBody
        const requestBody = {
          email : e.target.email.value,
          password : e.target.password.value
        }
        //ResponseData
        let response
        try {
           response = await api.loginUser(requestBody)
           console.log(response.data)
        } catch (error) {
          console.log(error)
          setError({error:true, errorMessage: error.response.data})
        }

        if(!response) return
        const utilisateur = response.data.utilisateur
        const accessToken = response.data.accessToken

        // Saving jwt token to local storage
        if(accessToken) {
        localStorage.setItem("jwt",accessToken)
        dispatch(Login(utilisateur))
        const sysInfo = await api.getSystemInfo(utilisateur)
        dispatch(intitializeSystemInfo(sysInfo))
        }
        // }
    }

  return (
    <div className='flex flex-col py-12 px-8 h-fit w-full bg-white rounded shadow-sm  '>
        <img className=" w-12" src={logo} alt="" />
        <div className='text-base font-semibold mt-1'>Sonatrach </div>
        <div className='text-base font-semibold mt-1'>Division Production</div>
        <div className='mt-1 text-orange-500 text-lg font-bold '>D.I.S.O.P</div>
        <div className='w-full mt-6 text-center font-semibold text-lg'>Connexion</div>
        
        <form className='w-full mt-4 flex flex-col px-20' method='POST' onSubmit={handleSubmit}>
            
            <div className='mb-1 '>Adresse mail</div>
            <InputField label="E-mail Adresse" required={true} type="text" id="email" name="email" placeholder="name@sonatrach.dz"/>
            
            <div className='mt-4 mb-1 '>Mot de Passe</div>
            <InputField label="Mot de Passe" required={true} type="password" id="password" name="password" />
            {error.error &&(<div className='mt-3 text-red-600 text-xs'>{error.errorMessage}</div>)}
            <button type="submit" className=' mt-6 h-10 w-full rounded-sm text-lg text-white font-semibold shadow bg-orange-500 hover:bg-orange-600 hover:shadow-md ease-in-out duration-100'>
                    Connecter</button>
        </form>
    </div>
  )
}

export default LoginForm