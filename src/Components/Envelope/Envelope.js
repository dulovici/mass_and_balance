import React, { useState } from 'react';
import './envelope.scss';
import Chart from "react-google-charts";


const Envelope = ({takeOff, landing}) => {
    const [aPosition, setAPosition] = useState({});
    const [mPosition, setMPosition] = useState({});

    // const rect = target.getBoundingClientRect();

    

    return (
        <>
        <div className='envelopes'>
            <Chart
            className='arm-chart'
            width={'600px'}
            height={'400px'}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Arm', 'Weight'],
                [takeOff.arm, takeOff.weight]
                
            ]}
            options={{
                title: `Weight-Arm Ratio`,
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

        <div className='imgs'>

            <div className='arm-chart' onClick={(e)=> 
                setAPosition(
                {...aPosition,
                x: e.clientX - e.target.getBoundingClientRect().left,
                y: e.clientY - e.target.getBoundingClientRect().top
                })}>
                <img className='aDot' src='https://i.ibb.co/JrpyrHg/red.png' alt='dot' 
                style={{left:`${aPosition.x - 5}px`, top:`${aPosition.y - 3}px`}}/>
            </div>

            <div className='moment-chart' onClick={(e)=> 
                setMPosition(
                {...mPosition,
                x: e.clientX - e.target.getBoundingClientRect().left, 
                y: e.clientY - e.target.getBoundingClientRect().top
                })}>
                <img className='mDot' src='https://i.ibb.co/JrpyrHg/red.png' alt='dot'
                style={{left:`${mPosition.x - 5}px`, top:`${mPosition.y - 3}px`}}/>
            </div>

        </div>
        </>
    )
}

export default Envelope

// onClick={(e)=> setAPosition({...aPosition,x: e.clientX, y: e.clientY})}