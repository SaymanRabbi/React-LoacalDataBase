import React from 'react';
import { localDataBase } from '../Localdb/Localdb';
import './SingelData.css'
const SingelData = (props) => {
    const { name, balance, id } = props.data;
    const addTocart = (id) => {
        localDataBase(id)
    }
    return (
        <div className='product'>
            <h2>Name:{name}</h2>
            <p>Blance Is: {balance}</p>
            <p>ID Is:{id}</p>
            <button onClick={()=>addTocart(id)}>Add To Cart</button>
        </div>
    );
};

export default SingelData;