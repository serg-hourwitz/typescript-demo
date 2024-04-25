// * Base
import { memo } from 'react';

// * Components
import UsersList from '../../../components/UsersList/UsersList';

const List = memo(() => {
  return <UsersList />
});


export default List