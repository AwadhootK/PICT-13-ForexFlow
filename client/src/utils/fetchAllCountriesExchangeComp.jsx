import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCountriesExchangeComponent = ({ startDate, endDate, countries, docCount }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios.get('/getAllCountriesExchange', {
      params: { sourceCountry: 'USA', startDate, endDate, docCount }
    })
      .then(response => setCountriesData(response.data.data))
      .catch(error => console.error(error));
  }, [startDate, endDate, docCount]);

  return (
    <div>
      <h2>All Countries Exchange</h2>
      <ul>
        {countriesData.map(country => (
          <li key={country.currency}>{`${country.currency}: ${country.exchangeRates.join(', ')}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCountriesExchangeComponent;
