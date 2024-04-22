// * Base
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// * Component
import Label from '../Label/Label';

// * Styles
import styles from './Converter.module.css';

// * Local
const DEFAULT_STATE = {
  amount: 1,
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  exchangeRate: null,
  convertedAmount: null,
  loading: true,
  error: '',
};

const ERROR_TEXT = 'Loading rates error';

const Converter = () => {
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    fetchExchangeRate(state.fromCurrency, state.toCurrency);
  }, [state.fromCurrency, state.toCurrency]);

  const fetchExchangeRate = useCallback((fromCurrency, toCurrency) => {
    axios
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(({ data }) => {
        const fromCurrencyRate = data.find(
          (currency) => currency.cc === fromCurrency
        );
        const toCurrencyRate = data.find(
          (currency) => currency.cc === toCurrency
        );

        if (fromCurrencyRate && toCurrencyRate) {
          const exchangeRate = toCurrencyRate.rate / fromCurrencyRate.rate;
          setState((prevState) => ({
            ...prevState,
            exchangeRate,
            loading: false,
            error: '',
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            error: ERROR_TEXT,
            loading: false,
          }));
        }
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState,
          error: ERROR_TEXT,
          loading: false,
        }));
      });
  }, []);

  useEffect(() => {
    fetchExchangeRate(state.fromCurrency, state.toCurrency);
  }, [fetchExchangeRate, state.fromCurrency, state.toCurrency]);

  useEffect(() => {
    const { amount, exchangeRate } = state;
    if (exchangeRate !== null && amount > 0) {
      setState((prevState) => ({
        ...prevState,
        convertedAmount: (amount * exchangeRate).toFixed(2),
      }));
    }
  }, [state.amount, state.exchangeRate]);

  const handleAmountChange = useCallback((e) => {
    const inputValue = Number(e.target.value);
    const newAmount = inputValue > 0 ? inputValue : 1;
    setState((prevState) => ({
      ...prevState,
      amount: newAmount,
    }));
  }, []);

  const handleFromCurrencyChange = useCallback((e) => {
    const fromCurrency = e.target.value;
    setState((prevState) => ({
      ...prevState,
      fromCurrency,
    }));
  }, []);

  const handleToCurrencyChange = useCallback((e) => {
    const toCurrency = e.target.value;
    setState((prevState) => ({
      ...prevState,
      toCurrency,
    }));
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>{ERROR_TEXT}</div>;
  }

  return (
    <div className={styles.converter}>
      <h1>Currency converter</h1>
      <div>
        <label>
          <div>Enter amount:</div>
          <input
            type="number"
            value={state.amount}
            onChange={handleAmountChange}
          />
        </label>
      </div>
      <div className={styles.container}>
        <Label
          title={'From'}
          value={state.fromCurrency}
          onChange={handleFromCurrencyChange}
        />
        <Label
          title={'To'}
          value={state.toCurrency}
          onChange={handleToCurrencyChange}
        />
      </div>
      <div>Converted amount: {state.convertedAmount}</div>
    </div>
  );
};

export default Converter;
