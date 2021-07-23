import React ,{useState, useEffect} from 'react';
import './InputTable.scss';

const startValues = {
    emptyW: 0,
    emptyA:0,
    emptyM:0,

    pil1W:0,
    pil1A:39,
    pil1M:0,

    pil2W:0,
    pil2A:39,
    pil2M:0,

    bag1W:0,
    bag1A:64,
    bag1M:0,

    bag2W:0,
    bag2A:84,
    bag2M:0,

    rGal:0,
    rRate:6,
    rampW:0,
    rampA:42,
    rampM:0,

    gGal:0,
    gRate:6,
    groundW:0,
    groundA:42,
    groundM:0,

    bGal:0,
    bRate:6,
    burnedW:0,
    burnedA:46,
    burnedM:0

}

function InputTable({takeOff, landing, setTakeOff, setLanding}) {
    
    const [values,setValues] = useState(startValues);



    const handleClick = (e) => {
        e.target.select();
    };

    const basicCond = {
        w: values.emptyW + values.pil1W + values.pil2W,
        m: values.emptyM + values.pil1M + values.pil2M
    }
    const noFuelCond = {
        w: basicCond.w + values.bag1W + values.bag2W,
        m: basicCond.m + values.bag1M + values.bag2M
    }
    const rampCond = {
        w: noFuelCond.w + values.rampW,
        m: noFuelCond.m + values.rampM
    }
    const takeOfCond = {
        w: rampCond.w - values.groundW,
        m: rampCond.m - values.groundM,
        
    }
    const landCond = {
        w: takeOfCond.w - values.burnedW,
        m: takeOfCond.m - values.burnedM
    }

    useEffect(()=>{
        setTakeOff(
            {...takeOff,
                weight: takeOfCond.w,
                arm: takeOfCond.m / takeOfCond.w,
                moment: takeOfCond.m
        })
    },[takeOfCond.w])

    useEffect(()=>{
        setLanding(
            {...landing,
                weight: landCond.w,
                arm: landCond.m / landCond.w,
                moment: landCond.m }
        )
    },[landCond.w])
    
    

    return (
        <div className='input-table'>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-2yfi">ITEM</th>
                        <th className="tg-2yfi">WEIGHT (lbs)</th>
                        <th className="tg-2yfi">ARM</th>
                        <th className="tg-2yfi">MOMENT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tg-0pky">Basic Empty Weight</td>
                        <td className="tg-c3ow"><input type='number' min='0' value={values.emptyW} onClick={handleClick} onChange={(e)=>
                            setValues((prev)=>({...prev, emptyW: +e.target.value, emptyM: prev.emptyA * e.target.value}))}/></td>
                        <td className="tg-c3ow"><input type='number' min='0' value={values.emptyA} onClick={handleClick} onChange={(e)=>
                            setValues((prev)=>({...prev, emptyA: +e.target.value, emptyM: prev.emptyW * e.target.value}))}/></td>
                        <td className="tg-c3ow"><input type='number' min='0' readOnly value={+values.emptyM.toFixed(2)} /></td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Pilot 1</td>
                        <td className="tg-c3ow"><input type='number' min='0' value={values.pil1W} onClick={handleClick} onChange={(e)=>  setValues((prev)=>({...prev, pil1W: +e.target.value, pil1M: +e.target.value * values.pil1A }))}/></td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {values.pil1A}/></td>
                        <td className="tg-c3ow">{values.pil1M}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Pilot 2</td>
                        <td className="tg-c3ow"><input type='number' min='0' value={values.pil2W} onClick={handleClick} onChange={(e)=>
                            setValues((prev)=>({...prev, pil2W: +e.target.value, pil2M: +e.target.value * values.pil2A}))}/></td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {values.pil2A}/></td>
                        <td className="tg-c3ow">{values.pil2M}</td>
                    </tr>
                    <tr>
                        <td className="tg-llyw">Basic Condition</td>
                        <td className="tg-34fe">{+basicCond.w.toFixed(2)}</td>
                        <td className="tg-34fe">{basicCond.w === 0 ? 0:(basicCond.m / basicCond.w).toFixed(2)}</td>
                        <td className="tg-34fe">{+basicCond.m.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Baggage Area 1</td>
                        <td className="tg-c3ow"><input type='number' min='0' value={values.bag1W} onClick={handleClick} onChange={(e)=>
                            setValues((prev)=>({...prev, bag1W: +e.target.value, bag1M: +e.target.value * values.bag1A}))}/></td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {values.bag1A}/></td>
                        <td className="tg-c3ow">{values.bag1M}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Baggage Area 2</td>
                        <td className="tg-c3ow"><input type='number' min='0' value={values.bag2W} onClick={handleClick} onChange={(e)=>
                            setValues((prev)=>({...prev, bag2W: +e.target.value, bag2M: +e.target.value * values.bag2A}))}/></td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {values.bag2A}/></td>
                        <td className="tg-c3ow">{+values.bag2M.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="tg-llyw">Zero Fuel Condition</td>
                        <td className="tg-34fe">{+noFuelCond.w.toFixed(2)}</td>
                        <td className="tg-34fe">{noFuelCond.w === 0 ? 0:(noFuelCond.m / noFuelCond.w).toFixed(2)}</td>
                        <td className="tg-34fe">{+noFuelCond.m.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Fuel Load</td>
                        <td className="tg-c3ow multiply">
                            <input type='number' min='0' value={values.rGal} onClick={handleClick} 
                                onChange={(e) => {
                                    setValues((prev)=>({...prev, 
                                        rGal: +e.target.value,
                                        rampW: +e.target.value * values.rRate}))
                                    setValues((prev)=>({...prev,
                                        rampM: prev.rampW * prev.rampA}))}
                                }/>
                            <div>gal. *</div>
                            <input type='number' min='0'  value = {values.rRate} />
                            <div style={{marginLeft: '10px'}}>=</div>
                            <input type='number' min='0'  value={values.rampW}/>
                        </td>
                        <td className="tg-c3ow"><input type='number' min='0'  value = {values.rampA}/></td>
                        <td className="tg-c3ow">{+values.rampM.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="tg-llyw">Ramp Condition</td>
                        <td className="tg-34fe">{+rampCond.w.toFixed(2)}</td>
                        <td className="tg-34fe">{rampCond.w === 0 ? 0:(rampCond.m / rampCond.w).toFixed(2)}</td>
                        <td className="tg-34fe">{+rampCond.m.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Fuel Burned On Ground(-)</td>
                        <td className="tg-c3ow multiply">
                        <input type='number' min='0' value={values.gGal} onClick={handleClick} 
                        onChange={(e) => {
                            setValues((prev)=>({...prev, 
                                gGal: +e.target.value,
                                groundW: +e.target.value * values.gRate}))
                            setValues((prev)=>({...prev,
                                groundM: prev.groundW * prev.groundA}))}
                        }/>
                            <div>gal. *</div>
                            <input type='number' min='0' value = {values.gRate}/>
                            <div style={{marginLeft: '10px'}}>=</div>
                            <input type='number' min='0' value={values.groundW}/>
                        </td>
                        <td className="tg-c3ow"><input type='number' min='0' value = {values.groundA}/></td>
                        <td className="tg-c3ow">{+values.groundM.toFixed(2)}</td>
                    </tr>
                    <tr className='to-cond'>
                        <td className="tg-llyw">TakeOff Condition</td>
                        <td className="tg-34fe">{+takeOfCond.w.toFixed(2)}</td>
                        <td className="tg-34fe">{takeOfCond.w === 0 ? 0:(takeOfCond.m / takeOfCond.w).toFixed(2)}</td>
                        <td className="tg-34fe">{+takeOfCond.m.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Fuel Burned During Flight(-)</td>
                        <td className="tg-c3ow multiply">
                        <input type='number' min='0' value={values.bGal} onClick={handleClick} 
                        onChange={(e) => {
                            setValues((prev)=>({...prev, 
                                bGal: +e.target.value,
                                burnedW: +e.target.value * values.bRate}))
                            setValues((prev)=>({...prev,
                                burnedM: prev.burnedW * prev.burnedA}))}
                        }/>
                            <div>gal. *</div>
                            <input type='number' min='0' value = {values.bRate}/>
                            <div style={{marginLeft: '10px'}}>=</div>
                            <input type='number' min='0' value={values.burnedW}/>
                        </td>
                        <td className="tg-c3ow"><input type='number' min='0' value = {values.burnedA}/></td>
                        <td className="tg-c3ow">{values.burnedM}</td>
                    </tr>
                    <tr className='landing-cond'>
                        <td className="tg-llyw">Landing Condition</td>
                        <td className="tg-34fe">{+landCond.w.toFixed(2)}</td>
                        <td className="tg-34fe">{landCond.w === 0 ? 0:(landCond.m / landCond.w).toFixed(2)}</td>
                        <td className="tg-34fe">{+landCond.m.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputTable






