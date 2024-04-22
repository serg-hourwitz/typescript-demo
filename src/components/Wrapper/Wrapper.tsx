import styles from './Wrapper.module.css';
import cn from 'classnames';
import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string | string[];
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = [] }) => {

  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
};

export default Wrapper;
