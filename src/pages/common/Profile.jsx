import React from 'react'
import PageHeader from '../../components/PageHeader'
import InputField from '../../components/InputField'
import avatar from '../../assets/images/avatar.webp'
import { useSelector } from 'react-redux'
import {HiOutlineMail } from 'react-icons/hi'


const Profile = () => {

  const handleSubmit = (e) =>{ 
    e.preventDefault()
    alert("form submitted")}
  
  const user = useSelector((state) => state.user)
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Mon" pageName="Profile" />
      <div className='h-full w-full my-8 flex flex-col gap-8'>
        {/* User Info */}
        <div className='w-1/2 h-52 flex flex-row bg-white rounded-sm shadow-sm p-2 gap-10'> 
          <div className='w-20 h-20'><img src={avatar} /></div>
          <div className='flex flex-col'>
            <div className='font-semibold text-xl'>{user.userInfo.firstName} {user.userInfo.lastName} </div>
            <div className='font-medium text-lg flex flex-row items-center gap-2'><HiOutlineMail size={18}/> {user.userInfo.email} </div>
          </div>
        </div> 

        {/* Mot de passe */}
        <div className='w-1/2 h-full bg-white rounded-sm shadow-sm px-4 py-2'>
          <div className='text-xl font-semibold ml-2 mt-2'>Réinitialiser mon mot de passe</div>

          <form  className=" w-1/2 h-fit pl-4" method='POST' onSubmit={handleSubmit}> 
            <div className='text-base font-normal text-gray-800 mb-1 mt-4'>Mot de passe actuel</div>
            <InputField type={"password"}/>

            <div className='text-base font-normal text-gray-800 mb-1 mt-4'>Nouveau mot de passe</div>
            <InputField type={"password"}/>

            <div className='text-base font-normal text-gray-800 mb-1 mt-4'>Confirmer le mote de passe</div>
            <InputField type={"password"}/>

            <button type='submit' className='h-10 w-full mt-4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
            Valider</button>
          </form>

          
        </div> 
      </div>
    </div>
  )
}

export default Profile