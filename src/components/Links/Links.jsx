import styles from './Links.module.css';
import DATA from './Links.data';

const Links = () => {
  return (
    <div className={styles.links}>
      <div className={styles.block}>
        <h4>Quick Links</h4>
        <ul className={styles.list}>
          {DATA.quick.map(({title, id}) => (
            <li className={styles.item} key={id}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.block}>
        <h4>Legal Stuff</h4>
        <ul className={styles.list}>
          {DATA.legal.map(({title, id}) => (
            <li className={styles.item} key={id}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
