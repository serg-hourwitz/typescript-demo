// * Base
import { memo, useEffect, useCallback, useState } from 'react';
import { useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import { TUsers } from '../../../types/users.types';

const URL_BASE = 'https://jsonplaceholder.typicode.com/todos/';

// * Components

const Detail = memo(() => {
  const [data, setData] = useState<TUsers | null>(null);

  const page = Number(new URLSearchParams(useLocation().search).get('page')) || 1;
  console.log('page: ', page);
  
  // const data = useParams();
  const { id } = useParams();

  const getData = useCallback(() => {
    axios.get(URL_BASE + id).then((response) => {
      response.status === 200 && setData(response.data);
    });
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (!data)
    return <div className="wrapper">User list loading. in progress...</div>;

  return (
    <div className="wrapper">
      <h2 className='mb-4'>Detail: {data ? data.title : '-'}</h2>
      <div>Page: { page}</div>
    </div>
  );
});

export default Detail;
