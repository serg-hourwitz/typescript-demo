import styles from './Banner.module.css';
import baseStyles from '../../styles/base.module.css';
import React from 'react';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={baseStyles.wrapper}>
        <div className={styles.block}>
          <Image className={styles.img} src="/public/image1.svg" alt="guy" />
          <Image className={styles.img} src="/public/image.svg" alt="guy" />
        </div>
      </div>
    </div>
  );
};

type TImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image: React.FC<TImageProps> = ({ src, alt, className }) => {
  return <img className={`${styles.img} ${className}`} src={src} alt={alt} />;
};

export default Banner;
