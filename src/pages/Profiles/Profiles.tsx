import { memo } from 'react';
import useTitle from '../../components/hooks/use-title.hook';

const Profiles = memo(() => {
  const pageTitle = useTitle({ title: 'Profiles' });
  return (
    <div className="text-start">
      <h1>{pageTitle}</h1>
    </div>
  );
});

export default Profiles;
