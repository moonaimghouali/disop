import React,{useState, useEffect} from 'react'
import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import {PageHeader} from '../../components'
import {ProductionMenu, ProductionDistrubtion} from './components'
import * as api from '../../api/epApi'
import { useSelector } from 'react-redux'
import {formatUnitesPuitsResponse} from '../../utils/Utils'
import { toast } from 'react-toastify'

const EpProduction = () => {


  const [bilan, setBilan] = useState(false)
  const [prodMenu, setProdMenu] = useState({perimetre : -1, date : new Date(new Date()- 86400000) })
  const [production, setProduction] = useState({valid : false, data : [], journee_production : null})
  const RegionId = useSelector((state)=> state.system.id)

  const handleClick = async ()=>{
    if (!production.valid) {
      toast.warn("vous ne pouvez pas calculer la production corrigees des puits. verifier toutes les donnees existent")
      return;
    }

    setBilan(true)
  }
  
  useEffect(()=>{
    const fn = async () =>{
      let journee_production = prodMenu.date.toISOString().split("T")[0]
      let response = await api.fetchUnitesPuitsProduction(RegionId, journee_production)
     
      let {valid, res} = formatUnitesPuitsResponse(response)
      console.log("response",journee_production, response, res, valid);
      
      setProduction({valid : valid , data : res, journee_production : journee_production})

      console.log("state", production.data, production.valid);
    }

    fn()
  },[prodMenu.perimetre, prodMenu.date, bilan])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production des" pageName="Puits"/>

      <ProductionMenu prodMenu={prodMenu} setProdMenu={setProdMenu}/>

      <div className='w-full h-full flex flex-col rounded bg-white shadow-sm' >
        <div div className='py-2 px-4 w-full flex flex-row-reverse'> 
          <button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>
            Calculer la production Corrigee
          </button>
        </div>

        <TreeGridComponent dataSource={production.data} allowPaging={true} pageSettings={{pageSize:7}} height={"100%"}
          childMapping="puits" treeColumnIndex={0} >
            <ColumnsDirective>
              <ColumnDirective field='id' headerText='ID' textAlign='left' width='70'></ColumnDirective>
              <ColumnDirective field='code' headerText='Code' textAlign='left'></ColumnDirective>
              {/* <ColumnDirective field='nom' headerText='Nom' textAlign='left'></ColumnDirective> */}
              <ColumnDirective field='production_unite_vm' headerText='Production (m3)' textAlign='left'></ColumnDirective>
              <ColumnDirective field='taux_contribution' headerText='Contribution ' textAlign='left'></ColumnDirective>
              <ColumnDirective field='production_corrigee' headerText='Production Corrigee (m3)' textAlign='left'></ColumnDirective>
            </ColumnsDirective>
          <Inject services={[Page]} />
        </TreeGridComponent>
      </div>

      {/* Bilan */}
      {bilan && (<ProductionDistrubtion setBilan={setBilan} valid={production.valid} production={production.data} journee_production={production.journee_production} />)}

    </div>
  )
}

export default EpProduction
