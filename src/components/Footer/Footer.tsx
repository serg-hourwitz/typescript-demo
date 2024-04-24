import styles from './Footer.module.css';
import Links from '../Links/Links';
import Wrapper from '../Wrapper/Wrapper';
import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className='pt-2 pb-2 bg-slate-50 mb-10'>
      <Wrapper>
        <div className='flex justify-between items-center'>
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