import React from 'react';
import img from './img/loading_spinner.gif'

export default function Loading({loading, l18n}) {
    return (loading ?
        <div style={{textAlign: 'center'}}>
            <img src={img} alt='loading'/>
            <h1>{l18n.loading}</h1>
        </div> : null);
}

