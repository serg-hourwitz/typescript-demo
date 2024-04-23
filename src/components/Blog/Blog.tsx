import styles from './Blog.module.css';
import LIST from './Blog.data';


const Blog = () => {
  return (
    <div className={styles.blog}>
      <h2 className={styles.title}>
        'We design tools to unveil your superpowers'
      </h2>
      <ul className={styles.list}>
        {LIST.map(({ src, alt, content, id, title }) => (
          <li className={styles.item} key={id}>
            <div className={styles.block}>
              <img className={styles.icon} src={src} alt={alt} />
              <div className={styles.content}>
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
