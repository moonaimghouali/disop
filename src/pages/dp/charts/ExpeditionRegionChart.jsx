import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {expeditionData} from "../../../data/chartsData"

const ExpeditionRegionChart = () => {

  return (
    <div className='bg-white rounded-sm row-span-4'>
    
      <ChartComponent title="Expedition Petrole Brut" primaryXAxis={{valueType:"Category",title:"Regions" , labelFormat:"{category}" , labelStyle:{fontWeight:"Bold"}}}
      primaryYAxis={{ labelFormat:"{value} TM", title:"Expedition"}} height="250"
      tooltip={{enable:true}} legendSettings={{visible:true}}> 

        <Inject services={[ColumnSeries, Category, Tooltip, Legend ]}></Inject>
        <SeriesCollectionDirective>

          <SeriesDirective type="Column" drawType="Column" name="Expedition" dataSource={expeditionData} 
          xName="code_region" yName="expedition" ></SeriesDirective>

          <SeriesDirective type="Column" drawType="Column" name="Previsions" dataSource={expeditionData} 
          xName="code_region" yName="prevision" colorName='grey'></SeriesDirective>

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
  )
}

export default ExpeditionRegionChart