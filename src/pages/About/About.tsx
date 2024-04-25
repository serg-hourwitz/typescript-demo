import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { EButton } from '../../types/button.types';

const About = () => {
  useEffect(() => {
    // Event listener function
    const handleClick = () => {
      console.log('click');
    };
    // підписка
    document.addEventListener('click', handleClick);
    // відписка для запобігання накопичення підписок
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <h1>router: About us page</h1>
      <Button type={EButton.BUTTON} />
      <Icon icon="facebook" />
      <Icon icon="building" />
      <Icon icon="megaphone" />
    </>
  );
};

export default About;
