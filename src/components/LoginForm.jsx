import React from 'react'
import logo from '../assets/images/logo-primary.png'
import InputField from './InputField'

const LoginForm = () => {

    const handleSubmit =()=>{}

  return (
    <div className='flex flex-col py-12 px-8 h-fit w-full bg-white rounded-sm shadow-sm  '>
        <img className=" w-12" src={logo} alt="" />
        <div className='text-base font-semibold mt-1'>Sonatrach </div>
        <div className='text-base font-semibold mt-1'>Division Production</div>
        <div className='mt-1 text-orange-500 text-lg font-bold '>D.I.S.O.P</div>
        <div className='w-full mt-6 text-center font-semibold text-lg'>Connexion</div>
        <form className='w-full mt-4 flex flex-col px-20' method='POST' onSubmit={handleSubmit}>
            
            <div className='mb-1 '>Adresse mail</div>
            <InputField label="E-mail Adresse" required={true} type="email" id="email" name="email" placeholder="name@sonatrach.dz"/>
            
            <div className='mt-4 mb-1 '>Mot de Passe</div>
            <InputField label="Mot de Passe" required={true} type="password" id="password" name="password" />

            <button type="submit" className=' mt-8 h-10 w-full rounded-sm text-lg text-white font-semibold shadow bg-orange-500 hover:bg-orange-600 hover:shadow-md ease-in-out duration-100'>
                    Connecter</button>
        </form>
    </div>
  )
}

export default LoginForm