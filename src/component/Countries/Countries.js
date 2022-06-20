import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountris] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountris(data))
    }, [])
    return (
        <div>
            <h1>Hello rest Countries : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;