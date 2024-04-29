import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import Language from '../../components/Language/Language';

const Nav = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between text-red-600 font-bold bg-teal-950 pt-2 pb-2 wrapper">
      <Link to="/" className="link">
        {/* Main */}
        {t('Main')}
      </Link>
      <Link to="/about" className="link">
        {/* About */}
        {t('About')}
      </Link>
      <Link to="/registration" className="link">
        {/* Registration */}
        {t('Registration')}
      </Link>
      <Link to="/rates" className="link">
        {/* Currency rates */}
        {t('Currency rates')}
      </Link>
      <Link to="/convert" className="link">
        {/* Currency converter */}
        {t('Currency converter')}
      </Link>
      <Link to="/lesson" className="link">
        {/* Lesson */}
        {t('Lesson')}
      </Link>
      <Link to="/search" className="link">
        {/* Profiles */}
        {t('Search')}
      </Link>
      <Link to="/users" className="link">
        {/* Users */}
        {t('users')}
      </Link>
      {/* navigation to another URL */}
      <Link
        to="https://react.dev/reference/react/Suspense" 
        target="_blank"
        className="link"
      >
        Suspense
      </Link>
      <Language />
    </div>
  );
});

export default Nav;
