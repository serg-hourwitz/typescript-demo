import { useState } from 'react';
import Time from '../Time/Time';
import styles from './Lesson.module.css';
import Dates from '../Dates/Dates';
import Converter from '../Converter/Converter';
import Icon from '../Icon/Icon';
import Test from '../Test/Test';

const Lesson = () => {
  const [value, setValue] = useState('Default value');

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={styles.text}>Value: {value}</h1>

      <input
        type="text"
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <button type="button" onClick={() => setValue('Default value')}>
        <span>TO DEFAULT</span>
      </button>

      <h2>Counter: {count}</h2>

      <button
        type="button"
        onClick={() => {
          setCount((prevValue) => prevValue + 1);
        }}
      >
        <span>ADD 1</span>
      </button>
      <button
        type="button"
        onClick={() => {
          setCount((prevValue) => prevValue - 1);
        }}
      >
        <span>SUBTRACT 1</span>
      </button>
      <Time />
      <Icon icon="facebook" />
      <Icon icon="building" />
      <Icon icon="megaphone" />
      <Test title="Hi!" />
      <Converter />
      <Dates />
    </div>
  );
};

export default Lesson;
