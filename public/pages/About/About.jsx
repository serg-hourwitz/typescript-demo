import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // підписка
    const clickEvent = document.addEventListener('click', () => {
      console.log('click');
    });
    // відписка для запобігання накопичення підписок
    return () => {
      document.removeEventListener('click', clickEvent);
    };
  }, []);

  return (
    <>
      <h1>router: About us page</h1>;
    </>
  );
};

export default About;
