import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, DateTimeCategory,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {pression, temperature} from "../../../data/epData"

const PuitsChart = ({data}) => {
  return (
    <div className='h-full w-full grid grid-rows-2 gap-4 overflow-y-scroll overflow-x-hidden'>
      {/* pression */}
      <div>
        <div className='text-lg font-semibold w-full text-center mt-1'>Pression</div>  
        
        <ChartComponent
          primaryXAxis={{valueType:"DateTime", labelFormat:'hm' , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
          primaryYAxis={{ labelFormat:"{value} Bars"}} 
          height="210"
          tooltip={{enable:true}} legendSettings={{visible:true}}> 

          <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel, DateTimeCategory ]}></Inject>

          <SeriesCollectionDirective>

            <SeriesDirective type="Line" drawType="Line" name="Pression" dataSource={pression} 
            xName="temps" yName="pressionP" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

            <SeriesDirective type="Line" drawType="Line" name="Pression" dataSource={pression} 
            xName="temps" yName="pressionT" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

          </SeriesCollectionDirective>

        </ChartComponent>
      </div>
      
      {/* temperature */}
      <div>
        <div className='text-lg font-semibold w-full text-center mt-1'>Temperature</div>
        
        {/* <ChartComponent
          primaryXAxis={{valueType:"DateTime", labelFormat:'hm' , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
          primaryYAxis={{ labelFormat:"{value} C"}} 
          height="210"
          tooltip={{enable:true}} legendSettings={{visible:true}}> 

          <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel ]}></Inject>

          <SeriesCollectionDirective>
            <SeriesDirective type="Line" drawType="Line" name="Temperature" dataSource={temperature} 
            xName="temps" yName="tempP" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

            <SeriesDirective type="Line" drawType="Line" name="Temperature" dataSource={temperature} 
            xName="temps" yName="tempT" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>
          </SeriesCollectionDirective>

        </ChartComponent> */}
      </div>
   
    </div>
  )
}

export default PuitsChart