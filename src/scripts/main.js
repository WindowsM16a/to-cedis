// import config from './config.js';

// const API_KEY = config.API_KEY; 

export const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    return data.rates[toCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
}; 

