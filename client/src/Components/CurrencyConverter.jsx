import './Converter.css'
import React, { useState, useEffect } from 'react';
import logo from './FORXFLOW logo.png'
const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const API_KEY = '64a2bed2b2476357cad540d0'; 
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setExchangeRates(data.rates);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [fromCurrency]);

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = event => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = event => {
    setToCurrency(event.target.value);
  };

  const convertCurrency = () => {
    const rate = exchangeRates[toCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  return (
    <>
    <div className="logo_div">
    <img src={logo} alt="" />
    </div>
 
    <div className='convertor_grid'>
      <h2>Currency Converter</h2>
      <div className='convertor_form'>
        <label>Amount :&nbsp;</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>From :&nbsp;&nbsp;</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>To :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="convert_button">
      <button onClick={convertCurrency}>Convert</button>
      </div>
      {convertedAmount !== null && (
        <p className='rate_exchange'>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
    <div className="extra_buttons">
      <button>ABOUT US</button>
    </div>
    <div className="extra_buttons">
      <button>GIT HUB</button>
    </div>
    </>
  );
};

export default CurrencyConverter;
