// CurrencySelector.js
import React from "react";
import './CurrencySelector.css'

const CurrencySelector = ({
  currencies,
  onSelectCurrency,
  selectedCurrency,
  selectorNumber,
}) => {
  return (
    <div className="currency-form" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
      <label htmlFor={`currencySelector${selectorNumber}`}>Currency:</label>
      <select
        className="form-control"
        id={`currencySelector${selectorNumber}`}
        value={selectedCurrency}
        onChange={(e) => onSelectCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
