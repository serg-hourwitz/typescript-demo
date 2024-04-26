// * Base
import { memo, useEffect, useCallback, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { TUsers } from '../../../types/users.types';

// * Component 
import Info from './Info';

const URL_BASE = 'https://jsonplaceholder.typicode.com/users/';

// * Components

const Detail = memo(() => {
  const [data, setData] = useState<TUsers | null>(null);

  const page =
    Number(new URLSearchParams(useLocation().search).get('page')) || 1;

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
      <div className="flex">
        <h3 className="mb-4 font-bold">Details about user:</h3>
        <div className="ml-1 underline italic">{data ? data.name : '-'}</div>
      </div>
      <Info data={data} />
      <div>Page: {page}</div>
    </div>
  );
});

export default Detail;
