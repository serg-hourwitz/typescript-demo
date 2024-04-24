import styles from './News.module.css';
import LIST from './News.data';


const News = () => {
  return (
    <div className="pt-2 pl-2.5 pb-2.5 text-center bg-blue-100 max-w-px-300">
      <h2 className='block mb-1.5'>Product Managers</h2>
      <ul className='flex flex-col gap--10'>
        {LIST.map(({ src, alt, content, id }) => (
          <li className='bg-red-100' key={id}>
            <div className='pl-2 pr-2 pt-1 pb-1'>
              <img className='w-35 h-35 mb-1' src={src} alt={alt} />
              <p>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
