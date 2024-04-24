import styles from './Links.module.css';
import DATA from './Links.data';
import React from 'react';

interface Item {
  title: string;
  id: number;
}

interface DATA {
  quick: Item[];
  legal: Item[];
}

const Links: React.FC = () => {
  return (
    <div className="w-0.4 flex justify-between bg-rose-100 rounded-lg">
      <div className="pl-1 pr-1 pt-2 pb-2">
        <h4 className="font-bold">Quick Links</h4>
        <ul className="flex flex-col gap-2">
          {DATA.quick.map(({ title, id }) => (
            <li key={id}>
              <a className="hover: text-emerald-400" href="#">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-1 pr-1 pt-2 pb-2">
        <h4 className="font-bold">Legal Stuff</h4>
        <ul className={styles.list}>
          {DATA.legal.map(({ title, id }) => (
            <li key={id}>
              <a className="hover: text-emerald-400" href="#">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
