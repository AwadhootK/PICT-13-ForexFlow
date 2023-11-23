import React, { useState, useEffect } from "react";
import axios from "axios";

const ExchangeRateChart = ({ selectedCurrency, selectedDuration }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend based on selectedCurrency and selectedDuration
    axios
      .get(
        `/api/exchange-rate?currency=${selectedCurrency}&duration=${selectedDuration}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCurrency, selectedDuration]);

  // Your JSX for displaying the chart
  return <div>{/* Display your chart here */}</div>;
};

export default ExchangeRateChart;
