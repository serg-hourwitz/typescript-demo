// * Base
import { memo, useEffect, useCallback, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { TUsers } from '../../../types/users.types';

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

  const Info = () => {
    return (
      <ul className="text-left">
        <li className="li">
          <span className="bold">Username:</span>
          <span>{data.username}</span>
        </li>
        <li className="li">
          <span className="bold">Email:</span>
          <span>{data.email}</span>
        </li>
        <li className="li">
          <span className="bold">Address: </span>
          <span>
            {data.address.street}, {data.address.suite}, {data.address.city},
            {data.address.zipcode}
          </span>
        </li>
        <li className="li">
          <span className="bold">Geolocation:</span>
          <span>
            {data.address.geo.lat}, {data.address.geo.lng}
          </span>
        </li>
        <li className="li">
          <span className="bold">Phone:</span>
          <span>{data.phone}</span>
        </li>
        <li className="li">
          <span className="bold">Website:</span>
          <span>{data.website}</span>
        </li>
        <li className="li">
          <span className="bold">Company:</span>
          <span>{data.company.name}</span>
        </li>
        <li className="li">
          <span className="bold">Catchphrase:</span>
          <span> {data.company.catchPhrase}</span>
        </li>
        <li className="li">
          <span className="bold">Balance sheet (BS):</span>
          <span>{data.company.bs}</span>
        </li>
      </ul>
    );
  };

  return (
    <div className="wrapper">
      <div className="flex">
        <h3 className="mb-4 font-bold">Details about user:</h3>
        <div className="ml-1 underline italic">{data ? data.name : '-'}</div>
      </div>
      <Info />
      <div>Page: {page}</div>
    </div>
  );
});

export default Detail;
