import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {glData} from "../../../data/epData"

const TemperatureChart = ({data}) => {
  return (
    <div className='h-full w-full overflow-y-scroll overflow-x-hidden'>
        <div className='text-lg font-semibold w-full text-center mt-1'>Temperature</div>  
    <ChartComponent
        primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
        primaryYAxis={{ labelFormat:"{value} C"}} 
        height="250"
        tooltip={{enable:true}} legendSettings={{visible:true}}>  

        <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel ]}></Inject>

        <SeriesCollectionDirective>

        <SeriesDirective type="Line" drawType="Line" name="Temp. Pipe" dataSource={data} 
        xName="journee_production" yName="pression_pipe" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

        <SeriesDirective type="Line" drawType="Line" name="Temp. Tete" dataSource={data} 
        xName="journee_production" yName="pression_tete" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default TemperatureChart