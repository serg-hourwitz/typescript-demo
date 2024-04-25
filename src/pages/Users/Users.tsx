import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Users = memo(() => {
  return <Outlet />;
});

export default Users;
