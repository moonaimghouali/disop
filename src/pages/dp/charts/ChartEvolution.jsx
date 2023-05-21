import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {productionData} from "../../../data/chartsData"

const ChartEvolution = ({data}) => {
  return (
    <div className='w-full h-full flex flex-col px-2 py-1'>
    <div className='text-lg font-semibold w-full text-center'>Evolution Production</div>
  
    <ChartComponent
    primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
    primaryYAxis={{ labelFormat:"{value} TM"}} 
    height="210"
    tooltip={{enable:true}} legendSettings={{visible:true}}> 

      <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel ]}></Inject>

      <SeriesCollectionDirective>
        <SeriesDirective type="Line" drawType="Line" name="Production" dataSource={data} 
        xName="journee" yName="production" marker={{dataLabel :{visible:true} , visible:true}} ></SeriesDirective>

        <SeriesDirective type="Line" drawType="Line" name="Expedition" dataSource={data} 
        xName="journee" yName="expedition" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

      </SeriesCollectionDirective>

    </ChartComponent>

  </div>
  )
}

export default ChartEvolution