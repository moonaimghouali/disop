import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, PolarSeries, RadarSeries,  Inject, Tooltip, ColumnSeries,SplineSeries ,LineSeries, Category } from '@syncfusion/ej2-react-charts'
import {summaryData, data} from "../../../data/data"

const ProductionRegionChart = () => {
  return (
    <div style={{width: "300px", height: "300px"}}>
    <ChartComponent title="Oil Production" primaryXAxis={{valueType:"Category", labelPlacement:"OnTicks"}}
    primaryYAxis={{minimum:100, maximum: 1000, interval: 100, labelFormat:"{value} TM"}}
    tooltip={{enable:true}}> 
      <Inject services={[RadarSeries, LineSeries, Category, Tooltip]}></Inject>
      <SeriesCollectionDirective>
        <SeriesDirective type="Radar" drawType="Line" name="Production" dataSource={data} xName="x" yName="y"
        marker={{visible:true}} isClosed={false}></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default ProductionRegionChart