import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCountriesExchangeComponent = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('/getAllCountriesExchange', {
      params: { sourceCountry: 'USA', startDate: '2022-01-01', endDate: '2022-12-31', docCount: 5 }
    })
      .then(response => setCountries(response.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Countries Exchange</h2>
      <ul>
        {countries.map(country => (
          <li key={country.currency}>{`${country.currency}: ${country.exchangeRates.join(', ')}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCountriesExchangeComponent;
