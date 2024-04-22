import styles from './News.module.css';
import LIST from './News.data';
import React from 'react';

interface ListItem {
  alt: string;
  src: string;
  content: string;
  id: number;
}

interface NewsProps {
  LIST: ListItem[];
}

const News: React.FC<NewsProps> = () => {
  return (
    <div className={styles.news}>
      <h2 className={styles.title}>Product Managers</h2>
      <ul className={styles.list}>
        {LIST.map(({ src, alt, content, id }) => (
          <li className={styles.item} key={id}>
            <div className={styles.block}>
              <img className={styles.icon} src={src} alt={alt} />
              <p>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
