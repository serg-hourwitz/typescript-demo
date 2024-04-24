import styles from './Main.module.css';
import Blog from '../Blog/Blog';
import News from '../News/News';
import Wrapper from '../Wrapper/Wrapper';

const Main = () => {
  return (
    <div className='mb-2 bg-slate-300'>
      <Wrapper>
        <div className='flex justify-between bg-white'>
          <Blog />
          <News />
        </div>
      </Wrapper>
    </div>
  );
};

export default Main;
