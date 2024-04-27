// * Base
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';

// * Types
import { TUsers } from '../../types/users.types';
import { Link } from 'react-router-dom';

const URL = 'https://jsonplaceholder.typicode.com/users';

const UsersList = memo(() => {
  const [list, setList] = useState<TUsers[]>([]);

  const getUsersList = useCallback(() => {
    axios.get(URL).then((response) => {
      response.status === 200 && setList(response.data);
    });
  }, []);

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  return (
    <div className="text-left">
      <h1 className="font-bold  mb-4">User list</h1>
      <ul className="wrapper">
        {list.map((item) => (
          <Item {...item} key={`Users list ${item.id}`} />
        ))}
      </ul>
    </div>
  );
});

const Item = memo(({ name, id }: TUsers) => (
  <li className="border-b-2 py-2 flex justify-between">
    <Link to={`/users/${id}`} className="link">
      <p>{name}</p>
    </Link>
  </li>
));

export default UsersList;
