import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flags } = props.country;
    return (
        <div className='country bg-info'>
            <h1>{name.common}</h1>
            <img src={flags.svg} alt="" />
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;