import ICONS from './Icon.data';
import cn from 'classnames';

import styles from './Icon.module.css';


const Icon = ({ className = [], icon }) => {
  return (
    <>
      <p>
        <svg className={cn([styles.icon, ...className])} viewBox="0 0 32 32">
          {ICONS[icon]}
        </svg>
      </p>
    </>
  );
};

export default Icon;
