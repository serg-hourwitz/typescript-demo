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
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Rates = lazy(() => import('./pages/Rates/Rates'));
const Convert = lazy(() => import('./pages/Convert/Convert'));
const Training = lazy(() => import('./pages/Training/Training'));
const Nav = lazy(() => import('./pages/Nav//Nav'));
const Profiles = lazy(() => import('./pages/Profiles/Profiles'));
const Users = lazy(() => import('./pages/Users/Users'));
const List = lazy(() => import('./pages/Users/List/List'));
const Detail = lazy(() => import('./pages/Users/Detail/Detail'));

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
        path: '/registration',
        element: <Element component={<Registration />} />,
      },
      {
        path: '/rates',
        element: <Element component={<Rates />} />,
      },
      {
        path: '/convert',
        element: <Element component={<Convert />} />,
      },
      {
        path: '/lesson',
        element: <Element component={<Training />} />,
      },
      {
        path: '/navigation',
        element: <Element component={<Nav />} />,
      },
      {
        path: '/profiles',
        element: <Element component={<Profiles />} />,
      },
      {
        path: '/todo',
        element: <Element component={<Users />} />,
        children: [
          {
            path: '',
            element: <Element component={<List />} />,
          },
          {
            path: ':id',
            element: <Element component={<Detail />} />,
          },
        ],
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
