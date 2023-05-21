import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import { productionData } from '../../../data/chartsData';
import { expeditionData } from '../../../data/chartsData';

const ChartContribution = ({data, type}) => {
  return (
    <div className='w-full h-full flex flex-col p-2'>
      <div className='text-lg font-semibold w-full text-center'>Contribution Production Par {type}</div>

        <AccumulationChartComponent id='pie-chart' tooltip={{ enable: true }}  >
            <Inject services={[AccumulationLegend, PieSeries,  AccumulationTooltip, AccumulationDataLabel]}/>
            
            <AccumulationSeriesCollectionDirective>

              <AccumulationSeriesDirective type='Pie' dataSource={data} xName='code' yName='production'  
              dataLabel={{visible: true, position: 'Outside', name: 'production'}} radius='r'>
              </AccumulationSeriesDirective>

            </AccumulationSeriesCollectionDirective>

          </AccumulationChartComponent>
    </div>
  )
}

export default ChartContribution