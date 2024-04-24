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
        className="h-10 border border-solid border-var-black rounded-md pl-4 py-2 text-gray-700 font-medium focus:outline-none hover:bg-gray-100"
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
