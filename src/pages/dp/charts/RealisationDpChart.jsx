import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {DpData} from "../../../data/chartsData"

const RealisationDpChart = () => {
  return (
    <div className='w-full h-full flex flex-col px-2 py-1'>
      <div className='text-lg font-semibold w-full text-center'>Realisations Production</div>
    
      <ChartComponent
      primaryXAxis={{valueType:"Category", labelFormat:"{category}" , labelPlacement:"OnTicks", edgeLabelPlacement:"Shift", labelIntersectAction:"MultipleRows"}}
      primaryYAxis={{ labelFormat:"{value} TM"}} 
      height="210"
      tooltip={{enable:true}} legendSettings={{visible:true}}> 

        <Inject services={[LineSeries, Category, Tooltip, Legend, DataLabel ]}></Inject>

        <SeriesCollectionDirective>
          <SeriesDirective type="Line" drawType="Line" name="Production" dataSource={DpData} 
          xName="mois" yName="production_dp" marker={{dataLabel :{visible:true} , visible:true}} ></SeriesDirective>

          <SeriesDirective type="Line" drawType="Line" name="Prevision" dataSource={DpData} 
          xName="mois" yName="prevision_dp" marker={{dataLabel :{visible:true}, visible:true}} ></SeriesDirective>

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
  )
}

export default RealisationDpChart