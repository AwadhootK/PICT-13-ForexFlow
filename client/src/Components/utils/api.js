// utils/api.js
const fetchExchangeRate = async (appId, baseCurrency, targetCurrency) => {
  try {
    const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?app_id=${appId}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const exchangeRate = data.rates[targetCurrency];
    return exchangeRate;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchExchangeRate;
