import styles from './Main.module.css';
import Blog from '../Blog/Blog';
import News from '../News/News';
import Wrapper from '../Wrapper/Wrapper';

const Main = () => {
  return (
    <div className={styles.main}>
      <Wrapper>
        <div className={styles.container}>
          <Blog />
          <News />
        </div>
      </Wrapper>
    </div>
  );
};

export default Main;
