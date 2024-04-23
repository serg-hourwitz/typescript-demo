import styles from './Radio.module.css';
import React, { ChangeEvent } from 'react';


type TProps = {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
  defaultChecked: boolean;
};

const Radio: React.FC<TProps> = ({
  title,
  name,
  value,
  onChange,
  onBlur,
  defaultChecked,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          type="radio"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          defaultChecked={defaultChecked}
        />
      </label>
    </>
  );
};

export default Radio;
