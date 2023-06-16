import React,{useState, useEffect} from 'react'
import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import {PageHeader} from '../../components'
import { MenuDate, PerimetreProductionData } from './components'
import {useSelector} from 'react-redux'
import * as epApi from './../../api/epApi'
import * as api from './../../api/xpApi'
import { toast } from 'react-toastify'
import {formatUnitesPuitsResponse} from '../../utils/Utils'
import { calculProductionPuitsCorrigee, calculProductionPerimetres } from '../../utils/CalculProduction'


const XpPerimetres = () => {
  let menuDate = useSelector((state)=> state.menus.menuDate)
  let RegionId = useSelector((state) => state.system.id)
  const [ productionData, setProductionData ] = useState([])
  const [production, setProduction] = useState({valid : false, data : [], journee_production : null})
  const [bilan, setBilan] = useState(false)
  const [journee, setJournee] = useState("")
  
  const [ prodCorrigee, setProdCorrigee] = useState([])
  const [ perimetres , setPerimetres] = useState([])
  const [ prodPerimetres, setProdPerimetres] = useState([])


  useEffect(()=>{
    const fn = async ()=>{
      let journee = new Date(menuDate.date).toISOString().split("T")[0]
      setJournee(journee)
      let response = await api.fetchRegionPerimetresProduction(RegionId, journee)
      console.log(response);
      setProductionData(response)
    }
    fn()
  },[menuDate.date])

  const handleClick = async () =>{
    let journee  = new Date(menuDate.date).toISOString().split("T")[0]

    let response = await epApi.fetchUnitesPuitsProduction(RegionId, journee)
    let {valid, res} = formatUnitesPuitsResponse(response)

    setProduction({valid : valid , data : res, journee_production : journee})
    if(!valid) {
      toast.warn("Vous ne pouvez pas calculer la production par perimetres.")
      return
    }

    let perims = await epApi.fetchPerimetres(RegionId)
    setPerimetres(perims)
    // console.log("perimetres",response)

    let result = calculProductionPuitsCorrigee(production.data)
    let perimetresProd = calculProductionPerimetres(result, journee)
    
    console.log("xpperimetres",result, perimetresProd);
    setProdCorrigee(result)
    setProdPerimetres(perimetresProd)

    if (perimetresProd.size >0) {
      setBilan(true)
    }else{
      setBilan(false)
    }

    // setBilan(true)
  }
  
  
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
    <PageHeader subTitle="Production par" pageName="Perimetres"/>

    <div className='mt-4 w-full h-full flex flex-col gap-4'>
      <MenuDate />

      <div className='w-full h-full flex flex-col rounded bg-white shadow-sm' >
        <div div className='py-2 px-4 w-full flex flex-row-reverse'> 
          <button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>
            Calculer la Production par Perimetres 
          </button>
        </div>

        <TreeGridComponent dataSource={productionData} allowPaging={true} pageSettings={{pageSize:7}} height={"100%"}
          childMapping="puits" treeColumnIndex={0} >
            <ColumnsDirective>
              <ColumnDirective field='id' headerText='Id' textAlign='left'/>
              <ColumnDirective field='code_perimetre' headerText='Perimetre' textAlign='left'/>
              <ColumnDirective field='production.stock_initial_tm' headerText='Stock Initial(TM)' textAlign='left'/>
              <ColumnDirective field='production.production_perimetre_tm' headerText='Production(TM)' textAlign='left'/>
              <ColumnDirective field='production.expedition_perimetre_tm' headerText='Expedition(TM)' textAlign='left'/>
              <ColumnDirective field='production.stock_final_tm' headerText='Stock Final(TM)' textAlign='left'/>
            </ColumnsDirective>
          <Inject services={[Page]} />
        </TreeGridComponent>
      </div>

      {/* Bilan */}
      {bilan && (<PerimetreProductionData setBilan={setBilan} perimetres={perimetres} prodCorrigee={prodCorrigee} prodPerimetres={prodPerimetres} journee_production={journee} />)}

    </div>
  </div> 
  )
}

export default XpPerimetres