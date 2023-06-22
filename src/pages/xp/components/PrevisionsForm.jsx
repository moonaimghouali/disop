import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { checkPerimetresPrevisions, formatPrevisions} from '../../../utils/Previsions'
import * as api from '../../../api/xpApi'
import { toast } from 'react-toastify'

const PrevisionsForm = ({perimetres, date}) => {

    let {id, code, nom} = useSelector((state) => state.system)
    const months = [1,2,3,4,5,6,7,8,9,10,11,12]

    const [regionPrevision, setRegionPrevision] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    // const [regionPrevision, setRegionPrevision] = useState({m1:0, m2:0, m3:0, m4:0, m5:0, m6:0, m7:0, m8:0, m9:0, m10:0, m11:0, m12:0,})
    // const [ perimetresPrevision, setPerimetresPrevision] = useState(perimetres.map(p=> ({id : p.id, regionPrevision: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]})))
    const [ perimetresPrevision, setPerimetresPrevision] = useState(new Map())

    useEffect(()=>{
        const hashSet = new Map();

        for(let i=0; i< perimetres.length; i++){
            console.log(perimetres[i]);
            hashSet.set(`p-${perimetres[i].id}`, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        console.log(hashSet);
        setPerimetresPrevision(hashSet)
        
    },[perimetres])
    
    const handleInputchange = (e) => {
        let inputId = e.target.id
        let perimetreId = parseInt(inputId.split("-")[0])
        let month = parseInt(inputId.split("-")[1])
        let perimetresPrev = perimetresPrevision
        let prev = perimetresPrevision.get(`p-${perimetreId}`)

        prev[month-1] = parseFloat(e.target.value) 
        perimetresPrev.set(`p-${perimetreId}`, prev)
        setPerimetresPrevision(perimetresPrev)
        
        let regPrev = regionPrevision
        let sumPrev = 0
        for(let i in perimetres){
            sumPrev += perimetresPrevision.get(`p-${perimetres[i].id}`)[month-1]
        }
        regPrev[month -1] = sumPrev
        setRegionPrevision(regPrev)
        console.log("regionPrev", regionPrevision);
    }

    const handleClick = async () =>{
        let {perimetresPrev, regionPrev } = formatPrevisions(perimetresPrevision, perimetres, regionPrevision, date, id)
        let response = await api.postPrevisions(regionPrev, perimetresPrev, id)    
        if (response.data.success) {
            toast.success("Les previsions sont chargees avec success.")
        }else{
            toast.error("Le chargement des previsions n'a pas reussi, veiullez reassyer ulterieuremnt.")
        }
    }

    const PrevRegion = ({regionPrevision})=>{
        return (
        <tr className='bg-orange-100 font-semibold'>
            <td>{nom}</td>
            {   
                regionPrevision.map((prev)=>(
                    <td>{prev}</td>
                ))
            }
        </tr>
        )
    }

  return (

    <div className='flex flex-col w-full h-full'>
    <div className='w-full flex flex-row-reverse px-2 py-2'>
        <button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider les previsions</button>
    </div>
    
    <table className='w-full table-fixed'>
        {/* Header */}
        <tr className='bg-orange-500 h-10 text-white '> 
            <th>-----</th> <th>Janvier</th> <th>Fevrier</th> <th>Mars</th> <th>Avril</th> <th>Mai</th> <th>Juin</th> <th>Juillet</th> <th>Aout</th> <th>Septembre</th> <th>Octobre</th> <th>Novembre</th> <th>Decembre</th> 
        </tr>
        {/* Perimetres */}
        {perimetres.map(p=>(
        <tr className='h-10 border border-gray-200'>
            <td>{p.code_perimetre}</td>
            {months.map(m=>(
            <td key={m}><input onChange={handleInputchange} className='w-24 h-8 px-1 border border-gray-300' type="number"  min={0} id={`${p.id}-${m}`} /></td>
            ))}            
        </tr>
        ))}
        {/* Region */}
            
        <PrevRegion regionPrevision={regionPrevision}/>
        
    </table>
    </div>
  )
}

export default PrevisionsForm