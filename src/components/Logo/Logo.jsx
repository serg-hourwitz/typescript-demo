import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#">
        <img className={styles.img} src="/logo.png" alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
