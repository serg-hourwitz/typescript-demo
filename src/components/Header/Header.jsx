// * Base
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
// * Components
import Wrapper from '../Wrapper/Wrapper';

//* Styles
import styles from './Header.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

//* State
import { memo, lazy, Suspense, useCallback, useEffect, useState } from 'react';

const Burger = lazy(() => import('../Burger/Burger'));

const Header = () => {
  const signIn = useCallback(() => {
    console.log('sign in');
  }, []);

  // resizing
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', () =>
      setWidth(window.innerWidth)
    );

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <>
      {/*few classes*/}
      {/* add class small for resizing */}
      <header
        className={cn([
          styles.header,
          styles.background,
          width < 480 && styles.small,
        ])}
      >
        <Wrapper className={[styles.wrapper]}>
          <div className={styles.container}>
            <Logo />
            <Navigation />
            <div className={styles.block}>
              <Button text={'Sign In'} onClick={signIn} />
              <Button text={'Sign Up'} color={'white'} />
              <Button
                target="_blank"
                href="https://www.instagram.com/"
                color={'red'}
                text="Instagram"
              />
            </div>
          </div>
        </Wrapper>
        {/* navigation in framework */}
        <div className={styles.links}>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
          <Link to="/Registration">Registration</Link>
          {/* navigation to another URL */}
          <Link to="https://react.dev/reference/react/Suspense" target="_blank">
            Suspense
          </Link>
          {/* resizing */}
          {width < 768 && (
            <Suspense fallback={<></>}>
              <Burger />
            </Suspense>
          )}
        </div>
      </header>
    </>
  );
};

export default memo(Header);
