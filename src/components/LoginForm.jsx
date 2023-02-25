import React from 'react'
import logo from '../assets/images/logo-primary.png'
import InputField from './InputField'
import { useSelector, useDispatch } from 'react-redux';
import { LoginAdmin, LoginManager, LoginUnite,  LoginResp } from '../store/slices/userSlice'

const LoginForm = () => {

    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()
        
        switch (e.target.email.value) {
          case "admin": dispatch(LoginAdmin())
            break;
          case "unite": dispatch(LoginUnite())
            break;
          case "dp": dispatch(LoginManager())
            break;
          case "resp": dispatch(LoginResp())
            break;
        
          default:
            break;
        }

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
            <InputField label="Mot de Passe" required={false} type="password" id="password" name="password" />

            <button type="submit" className=' mt-8 h-10 w-full rounded-sm text-lg text-white font-semibold shadow bg-orange-500 hover:bg-orange-600 hover:shadow-md ease-in-out duration-100'>
                    Connecter</button>
        </form>
    </div>
  )
}

export default LoginForm