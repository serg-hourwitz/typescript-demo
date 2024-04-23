import COUNTRY_LIST from '../helpers/select.data';
import styles from './Select.module.css';
import React, { ChangeEvent } from 'react';

type TProps = {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
};


const Select: React.FC<TProps> = ({ title, name, onChange, onBlur, value }) => {
  return (
    <label className={styles.label}>
      {title && <div className={styles.title}>{title}</div>}
      <select
        className={styles.select}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {COUNTRY_LIST.map(({ title, id }) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
