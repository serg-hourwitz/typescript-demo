import styles from './Wrapper.module.css';
import cn from 'classnames';

const Wrapper = ({ children, className = [] }) => {

  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
};

export default Wrapper;
