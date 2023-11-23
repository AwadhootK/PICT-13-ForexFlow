// components/ExchangeRateDisplay.js
import React, { useEffect, useState } from "react";
import fetchExchangeRate from "./utils/api";

const ExchangeRateDisplay = ({ baseCurrency, targetCurrency }) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const appId = "1f5cd214ef0d46b9b8a225c67f364ef0"; // Replace with your App ID

    const fetchData = async () => {
      const rate = await fetchExchangeRate(appId, baseCurrency, targetCurrency);
      setExchangeRate(rate);
    };

    fetchData();
  }, [baseCurrency, targetCurrency]);

  return (
    <div>
      {exchangeRate !== null ? (
        <p>
          1 {baseCurrency} equals {exchangeRate} {targetCurrency}
        </p>
      ) : (
        <p>Error fetching exchange rate data.</p>
      )}
    </div>
  );
};

export default ExchangeRateDisplay;
