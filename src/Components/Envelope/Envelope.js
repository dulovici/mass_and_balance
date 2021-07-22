import React from 'react';
import './envelope.scss';
import Chart from "react-google-charts";


const Envelope = ({takeOff, landing}) => {
    return (
        <div className='envelopes'>
            <Chart
            width={'600px'}
            height={'400px'}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Arm', 'Weight'],
                [takeOff.arm, takeOff.weight]
                
            ]}
            options={{
                title: 'Weight-Arm Ratio',
                hAxis: { title: 'Arm', minValue: 0, maxValue: 63 },
                vAxis: { title: 'Weight', minValue: 0, maxValue: 1720 },
                legend: 'none',
            }}
            rootProps={{ 'data-testid': '1' }}
            />

            <Chart
            width={'600px'}
            height={'400px'}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Moment', 'Weight'],
                [takeOff.moment, takeOff.weight]
                
            ]}
            options={{
                title: 'Weight-Moment Ratio',
                hAxis: { title: 'Moment', minValue: 0, maxValue: 64000 },
                vAxis: { title: 'Weight', minValue: 0, maxValue: 1720 },
                legend: 'none',
            }}
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default Envelope