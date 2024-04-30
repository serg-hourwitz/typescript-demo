import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import Language from '../../components/Language/Language';
import items from './Navdata';

const Nav = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between text-red-600 font-bold bg-teal-950 pt-2 pb-2 wrapper">
      {items.map(({ id, title, link, target }) => (
        <Link to={link} key={id} target={target} className="link">
          {t(title)}
        </Link>
      ))}
      <Language />
    </div>
  );
});

export default Nav;
