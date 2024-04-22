import COUNTRY_LIST from '../helpers/select.data';

import styles from './Select.module.css';

const Select = ({ title, name, onChange, onBlur, value }) => {
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
