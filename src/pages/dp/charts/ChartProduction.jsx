import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {productionData} from "../../../data/chartsData"

const ChartProduction = ({data, type}) => {
  return (
    <div className='w-full h-full flex flex-col px-2 pt-1'>
    <div className='text-lg font-semibold w-full text-center'>Production par {type}</div>
      <ChartComponent  
      primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelStyle:{fontWeight:"Bold"}}}
      primaryYAxis={{ labelFormat:"{value} TM"}} height="210"
      tooltip={{enable:true}} legendSettings={{visible:true}}> 

        <Inject services={[ColumnSeries, Category, Tooltip, Legend ]}></Inject>
        <SeriesCollectionDirective>

          <SeriesDirective type="Column" drawType="Column" name="Production" dataSource={data} 
          xName="code" yName="production" ></SeriesDirective>

          <SeriesDirective type="Column" drawType="Column" name="Prevision" dataSource={data} 
          xName="code" yName="prevision" colorName='#000'></SeriesDirective>

          <SeriesDirective type="Column" drawType="Column" name="Expedition" dataSource={data} 
          xName="code" yName="expedition" colorName='#000'></SeriesDirective>


        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
  )
}

export default ChartProduction