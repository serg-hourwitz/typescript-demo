import styles from './Navigation.module.css';
import items from './Navigation.data';




const Navigation = () => {
  
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        {items.map(({title, id}) => (
          <li className={styles.item} key={id}>
            <a href="#">{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
