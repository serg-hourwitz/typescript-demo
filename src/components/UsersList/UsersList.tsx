// * Base
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';

// * Types
import { TUsers } from '../../types/users.types';
import { Link } from 'react-router-dom';

const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=20';

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
    <>
      <h1 className='font-bold'>User list</h1>
      <ul className="wrapper">
        {list.map((item) => (
          <Item {...item} key={`Users list ${item.id}`} />
        ))}
      </ul>
    </>
  );
});

const Item = memo(({ title, completed, id }: TUsers) => (
  <li className="border-b-2 py-2 flex justify-between">
    <Link to={`/todo/${id}`} className="link">
      {title}
    </Link>
    {/* <span>{title}</span> */}
    <span>{completed ? 'YES' : 'NO'}</span>
  </li>
));

export default UsersList;
