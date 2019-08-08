import React from 'react';
import img from './img/loading_spinner.gif'

export default function Loading({loading}) {
    return (loading ?
        <div style={{textAlign: 'center'}}>
            <img src={img} alt='loading'/>
            <h1>LOADING</h1>
        </div> : null);
}

