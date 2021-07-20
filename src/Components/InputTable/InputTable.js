import React ,{useState} from 'react';
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
    bag1M:0
}

function InputTable() {
    const [values,setValues] = useState(startValues)

    const handleClick = (e) => {
        e.target.select();
    };

    const basicCond = {
        w: values.emptyW + values.pil1W + values.pil2W,
        m: values.emptyM + values.pil1M + values.pil2M
    }
    
    console.log(basicCond.w)

    console.log(values)

    return (
        <div className='input-table'>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-2yfi">ITEM</th>
                        <th className="tg-2yfi">WEIGHT</th>
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
                        <td className="tg-c3ow"><input type='number' min='0' readOnly value={values.emptyM} /></td>
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
                        <td className="tg-34fe">{basicCond.w}</td>
                        <td className="tg-34fe">{(basicCond.m / basicCond.w).toFixed(2)}</td>
                        <td className="tg-34fe">{basicCond.m}</td>
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
                        <td className="tg-c3ow"><input type='number' min='0'/></td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {84}/></td>
                        <td className="tg-c3ow">{0}</td>
                    </tr>
                    <tr>
                        <td className="tg-llyw">Zero Fuel Condition</td>
                        <td className="tg-34fe">{0}</td>
                        <td className="tg-34fe"></td>
                        <td className="tg-34fe">{0}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Fuel Load</td>
                        <td className="tg-c3ow multiply">
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {0}/>
                            <div>x</div>
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {6}/>
                            <div>=</div>
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {0}/>
                        </td>
                        <td className="tg-c3ow"><input type='number' min='0'  defaultValue = {42}/></td>
                        <td className="tg-c3ow">{0}</td>
                    </tr>
                    <tr>
                        <td className="tg-llyw">Ramp Condition</td>
                        <td className="tg-34fe">{0}</td>
                        <td className="tg-34fe"></td>
                        <td className="tg-34fe">{0}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Fuel Burned On Ground(-)</td>
                        <td className="tg-c3ow multiply">
                        <input type='number' min='0' style={{width: "50px"}} defaultValue = {0}/>
                            <div>x</div>
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {6}/>
                            <div>=</div>
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {0}/>
                        </td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {42}/></td>
                        <td className="tg-c3ow">{0}</td>
                    </tr>
                    <tr className='to-cond'>
                        <td className="tg-llyw">TakeOff Condition</td>
                        <td className="tg-34fe">{0}</td>
                        <td className="tg-34fe"></td>
                        <td className="tg-34fe">{0}</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Fuel Burned During Flight(-)</td>
                        <td className="tg-c3ow multiply">
                        <input type='number' min='0' style={{width: "50px"}} defaultValue = {0}/>
                            <div>x</div>
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {6}/>
                            <div>=</div>
                            <input type='number' min='0' style={{width: "50px"}} defaultValue = {0}/>
                        </td>
                        <td className="tg-c3ow"><input type='number' min='0' defaultValue = {46}/></td>
                        <td className="tg-c3ow">{0}</td>
                    </tr>
                    <tr className='landing-cond'>
                        <td className="tg-llyw">Landing Condition</td>
                        <td className="tg-34fe">{0}</td>
                        <td className="tg-34fe"></td>
                        <td className="tg-34fe">{0}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputTable

