import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import { productionData } from '../../../data/chartsData';
import { expeditionData } from '../../../data/chartsData';

const ContributionChart = () => {

  return (
    <div className='bg-white rounded-sm row-span-5'>
        <AccumulationChartComponent id='pie-chart' legendSettings={{visible: true}} 
        enableSmartLabels={true} enableAnimation={true} tooltip={{ enable: true }} title="Contribution a la production">

            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective dataSource={productionData} xName='code_region' yName='production' startAngle='270' endAngle='90' innerRadius='20%' 
              dataLabel={{visible: true, position: 'Outside', name: 'code_region'}} radius='r'>
              </AccumulationSeriesDirective>

              <AccumulationSeriesDirective dataSource={productionData} xName='code_region' yName='expedition' startAngle='270' endAngle='90' innerRadius='20%' 
              dataLabel={{visible: true, position: 'Outside', name: 'code_region'}} radius='r'>
              </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>

    </div>
  )
}

export default ContributionChart