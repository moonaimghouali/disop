import React, {useState, useEffect} from 'react'
import PageHeader from '../../components/PageHeader'
import MenuAnalyses from './components/MenuAnalyses'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { updateMenuMouvements } from '../../store/slices/menusSlice'
import * as api from '../../api/uniteApi'

import { BiCommentError } from 'react-icons/bi'
import  AnomalieView  from './components/AnomalieView'


const Analyses = () => {
    const [ analMenu, setAnalMenu] = useState({bac: -1, date : new Date( new Date() - 24*60*60*60 )})
    const [ analyses, setAnalyses] = useState([])
    const [anomalieShow, setAnomalieShow] = useState(false)
    const [anomalie, setAnomalie] =useState(null)
    const UniteId = useSelector((state)=> state.system.id)

  useEffect(()=>{
    
    const fn = async () =>{
      let journee = new Date(analMenu.date).toISOString().split("T")[0]
      let res = []
      res = await api.fetchAnalyses(UniteId, analMenu.bac, journee)
      
      console.log("res", res);
      setAnalyses(res)
    }
    fn()

  },[analMenu.bac, analMenu.date])

  const anomalieTemplate = (props)=>{

   let Unite_anomalie = props.Unite_anomalie
   if(Unite_anomalie === undefined || Unite_anomalie === null|| Unite_anomalie?.length ===0){
     return(
       <div className='w-fit px-4 py-1 rounded flex flex-row justify-center items-center bg-gray-200 text-gray-500'>
         <BiCommentError size={18} />
       </div>
     )
   }else{
     return (
      <button onClick={()=> { setAnomalie(Unite_anomalie);  setAnomalieShow(true); }}
        className='w-fit px-4 py-1 rounded flex flex-row justify-center items-center bg-red-600 text-white shadow-sm hover:cursor-pointer hover:shadow-md hover:bg-red-700 transition-all ease-in-out duration-150'>
         <BiCommentError size={18} />
      </button>
     )
   }
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Resultats des" pageName="Analyses"/>

      <div className='h-full w-full mt-4 flex flex-col gap-4'>
        {/* Menu de Controle */}
        <MenuAnalyses menu={analMenu} setMenu={setAnalMenu} />

        {/* table de mouvements */}
        <div className='w-full h-full bg-white'>
          {/* { !loading && ( */}
             <GridComponent height={"100%"} dataSource={analyses}  allowPaging={true} allowPdfExport={true} 
             allowExcelExport={true} pageSettings={{pageSize:8}} statelessTemplates={['directiveTemplates']}>
          
             <ColumnsDirective >
               {/* <ColumnDirective field='date_operation' headerText='Date' textAlign='left'/> */}
               <ColumnDirective field='Bac.code_bacs' headerText='Bac' textAlign='left'/>
               <ColumnDirective field='temperature' headerText='Temperature' textAlign='left' />
               <ColumnDirective field='densite' headerText='Densite' textAlign='left' />
               <ColumnDirective field='salinite' headerText='Salinite' textAlign='left' />
               <ColumnDirective field='tvr' headerText='TVR' textAlign='left' />
               <ColumnDirective field='bsw' headerText='BSW' textAlign='left' />
               <ColumnDirective field='anomalie' headerText='Anomalie' template={anomalieTemplate} textAlign='left' />

              
             </ColumnsDirective>
             <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />
            </GridComponent>

            {anomalieShow && (<AnomalieView setAnomalieShow={setAnomalieShow}  Unite_anomalie={anomalie} />)}
         
        </div>
      </div>
    </div>
  )
}

export default Analyses