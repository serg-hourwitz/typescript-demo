import styles from './Blog.module.css';
import LIST from './Blog.data';

const Blog = () => {
  return (
    <div className="w-70 pt-20 pr-20 pb-20 bg-slate-100">
      <h2 className="text-center mb-16 block text-2xl">
        'We design tools to unveil your superpowers'
      </h2>
      <ul className="flex flex-col gap--25px list-none">
        {LIST.map(({ src, alt, content, id, title }) => (
          <li className="flex bg-amber-500" key={id}>
            <div className="flex items-center gap--30px p-[10px]">
              <img className="w-50 h-50" src={src} alt={alt} />
              <div className="ml-3">
                <h3 className='text-left'>{title}</h3>
                <p>{content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
