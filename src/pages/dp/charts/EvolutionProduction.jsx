import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {productionData} from "../../../data/chartsData"

const EvolutionProduction = () => {
    return (
        <div className='w-full h-full flex flex-col px-2 py-1'>
        <div className='text-lg font-semibold'>Evolution Production</div>
    
      <ChartComponent
      primaryXAxis={{valueType:"Category",title:"Regions" , labelFormat:"{category}" , labelStyle:{fontWeight:"Bold"}}}
      primaryYAxis={{ labelFormat:"{value} TM", title:"Production"}} height="210"
      tooltip={{enable:true}} legendSettings={{visible:true}}> 

        <Inject services={[LineSeries, Category, Tooltip, Legend ]}></Inject>
        <SeriesCollectionDirective>

          <SeriesDirective type="Line" drawType="Line" name="Production" dataSource={productionData} 
          xName="code_region" yName="production" ></SeriesDirective>

          <SeriesDirective type="Line" drawType="Line" name="Expedition" dataSource={productionData} 
          xName="code_region" yName="expedition" colorName='#000'></SeriesDirective>

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
      )
}

export default EvolutionProduction