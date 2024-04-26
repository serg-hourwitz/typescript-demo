const Info = ({data}) => {
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
          {data.address.street}, {data.address.suite}, {data.address.city},{' '}
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

export default Info
