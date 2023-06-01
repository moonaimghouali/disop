import React,{useState, useEffect, useRef} from 'react'
import * as api from '../../../api/epApi'
import {ToggleSwitch} from '../../../components'

const FormPuitsParametres = ({puits, date , toggle, setToggle}) => {

  const [ouvert, setOuvert] = useState(false)
  const [gasLift, setGasLift] = useState(false)
  const [eau, setEau] = useState(false)

  useEffect(()=>{
    setOuvert(false)
    setEau(false)
    setGasLift(false)

    if(puits.type_puits === "PPHS" || puits.type_puits === "PPHSGL") setEau(true)
    if(puits.type_puits === "PPHGL" || puits.type_puits === "PPHSGL") setGasLift(true)
    if (puits.statut_puits === true) setOuvert(true)

    let fn = async () =>{
     
    }
    fn()
  }, [puits] )

  const handleSubmit = (e) =>{
    e.preventDefault()
   
  }

  return (
    <>
      <div className='flex flex-row items-center '>
        <div className='font-semibold text-xl flex-1'>Parametres puits " {puits.code_puits} "</div>
        <div className='flex flex-row gap-2 font-semibold items-center'> Production puits <ToggleSwitch toggle={toggle} setToggle={setToggle}/> </div>
      </div>

    <div className='h-full w-full flex flex-col my-4 '>
      {/* Toggles */}
      <div className='flex flex-row gap-8 mb-8'>
        <div className='flex flex-row gap-2 font-semibold items-center'> Statut <ToggleSwitch toggle={ouvert} setToggle={setOuvert}/> </div>
        {ouvert && (
        <>
        <div className='flex flex-row gap-2 font-semibold items-center'> Injection Gas-Lift <ToggleSwitch toggle={gasLift} setToggle={setGasLift}/> </div>
        <div className='flex flex-row gap-2 font-semibold items-center'> Injection Eau <ToggleSwitch toggle={eau} setToggle={setEau}/> </div>
        </>
        )}
      </div>
      {ouvert && (
      <form className='w-full h-fit flex flex-col gap-2 ' onSubmit={handleSubmit}>
         {/* form Content */}
        <div className='h-full w-full grid grid-cols-3 gap-4'>
          {/* Infos generales */}
          <div className='w-full h-fit grid grid-cols-11 gap-1 pr-2 border-r-1 border-gray-200'>

            <div className='col-span-4'>Press Pipe </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            required 
            id="pression_pipe" name='pression_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Temp Pipe </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="temperature_pipe" name='temperature_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>C</div>

            <div className='col-span-4'>Press Tete </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="pression_tete" name='pression_tete' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Temp Pipe  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="temperature_tete" name='temperature_tete' />
            <div className='col-span-1 pt-2 text-gray-700'>C</div>

            <div className='col-span-4'>GOR  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="gor" name='gor' />
            <div className='col-span-1 pt-2 text-gray-700'>m3/m3</div>

            <div className='col-span-4'>coef K  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="coeff_k" name='coeff_k' />
            <div className='col-span-1 pt-2 text-gray-700'></div>

          </div>

          {/* Infos Gas Lift */}
          {gasLift && (<div className='w-full h-fit grid grid-cols-11 gap-1 pr-2 border-r-1 border-gray-200'>  
            <div className='col-span-4'>Debit G-L  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="debit_gl" name='debit_gl' />
            <div className='col-span-1 pt-2 text-gray-700'>m3/d</div>

            <div className='col-span-4'>Pression G-L </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="pression_gl" name='pression_gl' />
            <div className='col-span-1 pt-2 text-gray-700'>Bar</div>
          </div>)}

          {/* Info Eau */}
          {eau && (<div className='w-full h-fit grid grid-cols-11 gap-1 '>
            <div className='col-span-4'>Debit Eau  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="debit_gl" name='debit_gl' />
            <div className='col-span-1 pt-2 text-gray-700'>m3/d</div>

            <div className='col-span-4'>Pression Eau </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            // required  disabled={disabled} onChange={handleChange} ref={heuresRef}
            id="pression_eau" name='pression_eau' />
            <div className='col-span-1 pt-2 text-gray-700'>Bar</div>
          </div>)}
        </div>
        
        


        {/* Button */}
        <div  className='mt-4 w-full flex flex-row'> 
          <button type='submit' className='py-2 px-12  rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>
            Valider
          </button>
        </div>
         
      </form> 
      )} 
    </div>
    </>
  )
}

export default FormPuitsParametres