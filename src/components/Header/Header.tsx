// * Base
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button, { EColor } from '../Button/Button';
// * Components
import Wrapper from '../Wrapper/Wrapper';

//* State
import { memo, lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { EButton } from '../../types/button.types';

const Burger = lazy(() => import('../Burger/Burger'));

const Header = () => {
  const signIn = useCallback(() => {
    console.log('sign in');
  }, []);

  // resizing
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/*few classes*/}
      {/* add class small for resizing */}
      <header
        // className={cn([
        //   styles.header,
        //   styles.background,
        //   width < 480 && styles.small,
        // ])}
        className={
          'w-100 pt-5 pb-5 mt-5 mb-2 bg-slate-100 text-blue-900 ' +
          (width < 480 ? 'none' : '')
        }
      >
        <Wrapper className="pl-20 pr-20 max-w-px-1210 m-0 mx-auto">
          <div className="flex justify-between items-center">
            <Logo />
            <Navigation />
            <div className="flex gap-2 items-center">
              <Button text={'Sign In'} onClick={signIn} type={EButton.BUTTON} />
              <Button
                text={'Sign Up'}
                color={EColor.WHITE}
                type={EButton.BUTTON}
              />
              <Button
                target="_blank"
                href="https://www.instagram.com/"
                color={EColor.RED}
                text="Instagram"
                type={EButton.BUTTON}
              />
            </div>
          </div>
        </Wrapper>
        {/* navigation in framework */}
        <div className="flex justify-between pl-2 pr-2">
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
