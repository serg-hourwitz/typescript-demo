import styles from './Checkbox.module.css';
import React, { ChangeEvent } from 'react';

type TProps = {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
};

const Checkbox: React.FC<TProps> = ({
  title,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.checkbox}
          type="checkbox"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </label>
    </>
  );
};

export default Checkbox;
