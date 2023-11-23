import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryListComponent = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios.get('/getCountryList')
      .then(response => setCountryList(response.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    countryList
  );
};

export default CountryListComponent;
