import styles from './Footer.module.css';
import Links from '../Links/Links';
import Wrapper from '../Wrapper/Wrapper';
import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.block}>
          <a href="#">
            <img src="/logo.png" alt="logo" />
          </a>
          <Links />
          <img className={styles.img} src="/public/image2.svg" alt="guy" />
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer