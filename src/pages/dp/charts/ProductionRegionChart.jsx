import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,   Inject, Tooltip, ColumnSeries,  Category, Legend, DataLabel } from '@syncfusion/ej2-react-charts'
import {productionData} from "../../../data/chartsData"

const ProductionRegionChart = () => {

  
  return (

    <div className='bg-white rounded-sm row-span-4'>
    
      <ChartComponent title="Production Petrole Brut" primaryXAxis={{valueType:"Category",title:"Regions" , labelFormat:"{category}" , labelStyle:{fontWeight:"Bold"}}}
      primaryYAxis={{ labelFormat:"{value} TM", title:"Production"}} height="250"
      tooltip={{enable:true}} legendSettings={{visible:true}}> 

        <Inject services={[ColumnSeries, Category, Tooltip, Legend ]}></Inject>
        <SeriesCollectionDirective>

          <SeriesDirective type="Column" drawType="Column" name="Production" dataSource={productionData} 
          xName="code_region" yName="production" ></SeriesDirective>

          <SeriesDirective type="Column" drawType="Column" name="Previsions" dataSource={productionData} 
          xName="code_region" yName="prevision" colorName='#000'></SeriesDirective>

        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
    
  )
}

export default ProductionRegionChart