// * Base
import { memo, useCallback, useEffect, useId, useState } from 'react';
import axios from 'axios';

// * Components
import Button from '../Button/Button';

// * Styles
import styles from './Dates.module.css';

// * Local
const DEFAULT_STATE = { list: [], error: '', loading: true };

const ERROR_TEXT = 'List loading error. Try again';

const Dates = () => {
  const [state, setState] = useState(DEFAULT_STATE);

  const id = useId(); // додаємо до key
  // console.log('id: ', id);

  const getList = useCallback(() => {
    setState((prevState) => ({ ...prevState, loading: true }));

    axios
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(({ data }) => {
        setState((s) => ({ ...s, list: data }));

      })
      .catch(() => {
        setState((s) => ({ ...s, error: ERROR_TEXT }));
      })
      .finally(() => {
        setState((s) => ({ ...s, loading: false }));
      });
  }, []);

  useEffect(() => getList(), [getList]);

  return (
    <>
      <h2>Currency rates</h2>
      <ul className={styles.list}>
        {state.loading ? (
          <p>Loading...</p>
        ) : state.error ? (
          <>
            <p>{state.error}</p>;
            <Button text="TRY AGAIN" onClick={getList} />
          </>
        ) : (
          state.list.map(({ txt, rate, cc, r030, exchangedate }) => (
            <Item
              currency={`${txt} (${cc})`}
              rate={rate}
              exchangeDate={exchangedate}
              key={`list item ${r030}, ${id}`}
            />
          ))
        )}
      </ul>
    </>
  );
};

const Item = ({ currency, rate, exchangeDate }) => {
  return (
    <li className={styles.item}>
      <h4>
        {currency}
      </h4>
      <p>Rate: {rate}</p>
      <p>Exchange date: {exchangeDate}</p>
    </li>
  );
};

export default memo(Dates);
