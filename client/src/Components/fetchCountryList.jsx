// CountryList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/getCountryList"
        );

        if (response.status === 200) {
          setCurrencies(response.data.data);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching country list:", error.message);
      }
    };

    fetchCurrencies();
  }, []);

  return currencies;
};

export default CountryList;
