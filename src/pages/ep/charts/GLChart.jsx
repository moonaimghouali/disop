import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {productionData} from "../../../data/chartsData"

const GLChart = ({data}) => {
  return (
    <div className='h-full w-full grid grid-rows-2 gap-4 overflow-y-scroll overflow-x-hidden'>
      {/* debit GL */}
      <div>
        <div className='text-lg font-semibold w-full text-center mt-1'>GL Injection</div>  
        <ChartComponent
        primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
        primaryYAxis={{ labelFormat:"{value} m3/j"}} 
        height="210"
        tooltip={{enable:true}} legendSettings={{visible:true}}> 

          <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel ]}></Inject>

          <SeriesCollectionDirective>

            <SeriesDirective type="Line" drawType="Line" name="Pression" dataSource={data} 
            xName="temps" yName="debit_gl" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

          </SeriesCollectionDirective>

        </ChartComponent>
      </div>
      
      {/* pression */}
      <div>
        <div className='text-lg font-semibold w-full text-center mt-1'>Pression GL</div>
        
        <ChartComponent
        primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
        primaryYAxis={{ labelFormat:"{value} Bars"}} 
        height="210"
        tooltip={{enable:true}} legendSettings={{visible:true}}> 

          <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel ]}></Inject>

          <SeriesCollectionDirective>
            <SeriesDirective type="Line" drawType="Line" name="Temperature" dataSource={data} 
            xName="temps" yName="pression_gl" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>
          </SeriesCollectionDirective>

        </ChartComponent>
      </div>
   
    </div>
  )
}

export default GLChart