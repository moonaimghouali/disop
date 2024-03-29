import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import React, {useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
import {ProdMenu, CommentairesView} from './components'
import * as api from '../../api/dpApi'
import {GoComment} from 'react-icons/go'


const DpProduction = () => {

  const [commentShow, setCommentShow] = useState(false)
  const [commentaires, setCommentaires] = useState([])
  const [entite, setEntite] = useState({})
  const [ production, setProduction ] = useState([])
  const [ menuProd, setMenuProd] = useState({journalier : true, date : new Date( new Date() - 24*60*60*1000) })
  // const menuDateDp = useSelector((state)=>state.menus.menuDateDp)

  useEffect(()=>{
     const fetchData = async ()=>{
      if (menuProd.journalier) {
        let journee = new Date(menuProd.date).toISOString().split("T")[0]
        // console.log(journee);
        let repsonse = await api.fetchDailyProduction(journee)
        setProduction(repsonse.res)
        console.log("prod",repsonse);
      }else{
        console.log(menuProd.date);
        // endOfMonth = ne
      }  
    }
    fetchData()
  },[menuProd.journalier, menuProd.date])

  const CommentaireTemplate = (props) => {
    
    // const [ commentaires, setCommentaires] = useState(props.commentaires)
    let commentaires = props.commentaires
    if(commentaires === undefined || commentaires === null|| commentaires?.length ===0){
      return(
        <div className='w-fit px-4 py-1 rounded flex flex-row justify-center items-center bg-gray-200 text-gray-500'>
          <GoComment size={18} />
        </div>
      )
    }else{
      return (
        <button onClick={()=> { setCommentaires(commentaires); setEntite(props); setCommentShow(true); }}
        className='w-fit px-4 py-1 rounded flex flex-row justify-center items-center bg-orange-600 text-white shadow-sm hover:cursor-pointer hover:shadow-md hover:bg-orange-700 transition-all ease-in-out duration-150'>
          <GoComment size={18} />
        </button>
      )
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Production" subTitle="Consulter la" />

      <ProdMenu menuProd={menuProd} setMenuProd={setMenuProd}/>
      
      <div className='flex w-full h-full mt-2 rounded bg-white shadow-sm' >

        <TreeGridComponent dataSource={production} allowPaging={true} pageSettings={{pageSize:9}} height={"100%"}  statelessTemplates={['directiveTemplates']}
          childMapping="unites" treeColumnIndex={0} >

            <ColumnsDirective>
              <ColumnDirective field='code' headerText='Code' textAlign='left'></ColumnDirective>
              <ColumnDirective field='nom' headerText='Nom' textAlign='left'></ColumnDirective>
              <ColumnDirective field='stock_initial_tm' headerText='Stock Initial' textAlign='left'></ColumnDirective>
              <ColumnDirective field='production_tm' headerText='Production' textAlign='left'></ColumnDirective>
              <ColumnDirective field='expedition_tm' headerText='Expedition' textAlign='left'></ColumnDirective>
              <ColumnDirective field='stock_final_tm' headerText='Stock Final' textAlign='left'></ColumnDirective> 
              <ColumnDirective field='commnetaires' headerText='Commentaires' textAlign='left'  template={CommentaireTemplate}></ColumnDirective> 
            </ColumnsDirective>

          <Inject services={[Page]} />
        </TreeGridComponent>
      </div>
      {commentShow && (<CommentairesView setCommentShow={setCommentShow} commentaires={commentaires} entite={entite}/>)}
    </div>
  )
}

export default DpProduction