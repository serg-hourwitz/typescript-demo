import ICONS, { TIconType } from './Icon.data';
import cn from 'classnames';
import React from 'react';
import styles from './Icon.module.css';


interface IconProps {
  className?: string[];
  icon: TIconType;
}

const Icon: React.FC<IconProps> = ({ className = [], icon }) => {
  return (
    <svg className={cn([styles.icon, ...className])} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
