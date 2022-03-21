import React, { useEffect, useState } from 'react';
import { total } from '../../Total/Total';
import SingelData from '../SingelData/SingelData';

const Data = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch("data.json").then(res=>res.json()).then(data=>setDatas(data))
    }, [])
    const GrandTotal = total(datas)
    return (
        <div>
            <h2>Grand Totla Is:{GrandTotal}</h2>
            {
                datas.map(data=><SingelData data={data} key={data.id}></SingelData>)
            }
        </div>
    );
};

export default Data;