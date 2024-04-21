import { EButton } from '../types/button.types';
import styles from './Button.module.css';
import cn from 'classnames';

import React from 'react';

// * Types local

type TProps = {
  disabled: boolean;
  color: EColor;
  text: string;
  type: EButton;
  href: string;
  onClick: () => void;
};

enum EColor {
  DEFAULT = 'default',
  WHITE = 'white',
  RED = 'red',
}

const Button: React.FC<TProps> = ({
  text = 'Default text',
  type,
  color,
  disabled = false,
  href = '',
  onClick,
}) => {
  const styleList = [styles.button];

  switch (color) {
    case EColor.RED: {
      styleList.push(styles.red);
      break;
    }
    case EColor.WHITE: {
      styleList.push(styles.white);
      break;
    }
    default: {
      console.log('=)');
    }
  }

  if (href) {
    return (
      <Link text={text} href={href} onClick={onClick} styleList={styleList} />
    );
  }

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={cn(styleList)}
        disabled={disabled}
      >
        <span>{text}</span>
      </button>
    </div>
  );
};

type TLinkProps = {
  text: string;
  href: string;
  onClick: () => void;
  styleList: string[];
};

const Link: React.FC<TLinkProps> = ({ text, href, onClick, styleList }) => {
  return (
    <a target="_blank" href={href} onClick={onClick} className={cn(styleList)}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
