// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Button from './components/Button/Button';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Icon from './components/Icon/Icon';
import { EButton } from './types/button.types';
import Header from './components/Header/Header';
import Lesson from './components/Lesson/Lesson';
import Dates from './components/Dates/Dates';
import Main from './pages/Main/Main';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Header />
      <Outlet />
      <Button type={EButton.BUTTON } />
      <Banner />
      <Blog />
      <News />
      <Footer />
      <Icon icon='facebook' />
      <Icon icon='building' />
      <Icon icon='megaphone' />
      <Lesson />
      <Main />
    </>
  );
}

export default App;
