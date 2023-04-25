import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import { productionData } from '../../../data/chartsData';
import { expeditionData } from '../../../data/chartsData';

const ContributionChart = ({data}) => {

  return (
    <div className='w-full h-full flex flex-col p-2'>
      <div className='text-lg font-semibold'>Contribution Production</div>

        <AccumulationChartComponent id='pie-chart' tooltip={{ enable: true }}  >
            <Inject services={[AccumulationLegend, PieSeries,  AccumulationTooltip, AccumulationDataLabel]}/>
            
            <AccumulationSeriesCollectionDirective>

              <AccumulationSeriesDirective type='Pie' dataSource={data} xName='code_region' yName='production'  
              dataLabel={{visible: true, position: 'Outside', name: 'production'}} radius='r'>
              </AccumulationSeriesDirective>

            </AccumulationSeriesCollectionDirective>

          </AccumulationChartComponent>
    </div>
  )
}

export default ContributionChart