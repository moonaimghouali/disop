import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {DpDataCumulees} from "../../../data/chartsData"

const ChartRealisationCumul = () => {
  return (
    <div className='w-full h-full flex flex-col px-2 pt-1'>
    <div className='text-lg font-semibold w-full text-center'>Realisations Cumulees de Production </div>

      <ChartComponent  
      primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelStyle:{fontWeight:"Bold"}}}
      primaryYAxis={{ labelFormat:"{value} TM"}} height="210"
      tooltip={{enable:true}} legendSettings={{visible:true}}> 

        <Inject services={[ColumnSeries, Category, Tooltip, Legend ]}></Inject>
        <SeriesCollectionDirective>

          <SeriesDirective type="Column" drawType="Column" name="Production" dataSource={DpDataCumulees} 
          xName="mois" yName="production" ></SeriesDirective>

          <SeriesDirective type="Column" drawType="Column" name="Prevision" dataSource={DpDataCumulees} 
          xName="mois" yName="prevision" colorName='#000'></SeriesDirective>

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
  )
}

export default ChartRealisationCumul