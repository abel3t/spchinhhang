import React, { useReducer, useEffect } from 'react';
import CurrencyContext from './currency.context';
import currencyReducer, { initialState } from './currency.reducer';

const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, initialState);
  const toggleCurrency = currency => {
    console.log(currency);
    dispatch({ type: 'CURRENT_CURRENCY', payload: currency });
    localStorage.setItem('currency', JSON.stringify(currency));
  };
  useEffect(() => {
    const localCurrency = JSON.parse(localStorage.getItem('currency'));
    if (localCurrency) {
      toggleCurrency(localCurrency);
    } else {
      toggleCurrency({ id: 'VND', label: 'đ', format: 'vi-VN' });
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ state, toggleCurrency, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  );
};
export default CurrencyProvider;
