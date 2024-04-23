import styles from './Field.module.css';
import React, { ChangeEvent } from 'react';

type TProps = {
  title: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: any;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
};

const Field: React.FC<TProps> = ({
  title,
  type = 'text',
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className={styles.error}>{error || ''}</div>
      </label>
    </>
  );
};

export default Field;


