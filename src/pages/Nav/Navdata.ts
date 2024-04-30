interface EItems {
  id: string;
  title: string;
  link: string;
  target: string;
}

const items: EItems[] = [
  {
    id: '1',
    title: 'Main',
    link: '/',
    target: '',
  },
  {
    id: '2',
    title: 'About',
    link: '/about',
    target: '',
  },
  {
    id: '3',
    title: 'Registration',
    link: '/registration',
    target: '',
  },
  {
    id: '4',
    title: 'Currency rates',
    link: '/rates',
    target: '',
  },
  {
    id: '5',
    title: 'Lesson',
    link: '/converter',
    target: '',
  },
  {
    id: '6',
    title: 'Currency converter',
    link: '/lesson',
    target: '',
  },
  {
    id: '7',
    title: 'Search',
    link: '/search',
    target: '',
  },
  {
    id: '8',
    title: 'users',
    link: '/users',
    target: '',
  },
  {
    id: '9',
    title: 'Suspense',
    link: 'https://react.dev/reference/react/Suspense',
    target: '_blank',
  },
];

export default items;

//  <Link to="/" className="link">
//         {/* Main */}
//         {t('Main')}
//       </Link>
//       <Link to="/about" className="link">
//         {/* About */}
//         {t('About')}
//       </Link>
//       <Link to="/registration" className="link">
//         {/* Registration */}
//         {t('Registration')}
//       </Link>
//       <Link to="/rates" className="link">
//         {/* Currency rates */}
//         {t('Currency rates')}
//       </Link>
//       <Link to="/converter" className="link">
//         {/* Currency converter */}
//         {t('Currency converter')}
//       </Link>
//       <Link to="/lesson" className="link">
//         {/* Lesson */}
//         {t('Lesson')}
//       </Link>
//       <Link to="/search" className="link">
//         {/* Profiles */}
//         {t('Search')}
//       </Link>
//       <Link to="/users" className="link">
//         {/* Users */}
//         {t('users')}
//       </Link>
