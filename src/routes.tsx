import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';


// * Element
// type of component?
const Element = ({ component }: { component: any }) => {
  // Suspense - обгортка елемента, що вантажиться
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

// lazy load - завантаження сторінки  тільки тоді, коли на неї переходить користувач
const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const Error = lazy(() => import('./pages/Error/Error'));
const Registration = lazy (() => import('./pages/Registration/Registration'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        // element: <Main />,

        // Loading відображається, поки вантажиться Main
        // element: <Suspense fallback={<Loading />}>
        //   {<Main />}
        // </Suspense>,

        // Заміняємо на Element
        element: <Element component={<Main />} />,
      },
      {
        path: '/about',
        // element: <About />,
        // element: <Suspense fallback={<Loading />}>
        //   {<About />}
        // </Suspense>,
        element: <Element component={<About />} />,
      },
      {
        path: '/Registration',
        element: <Element component={<Registration />} />,
      },
      {
        // Error 404
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default router;

