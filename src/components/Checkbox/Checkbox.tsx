import styles from './Checkbox.module.css';


const Checkbox = ({
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
          type='checkbox'
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </label>
    </>
  );
}

export default Checkbox