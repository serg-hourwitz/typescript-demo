// import { TUser } from '../../types/user.types';

// let test: string = 'test';

// let num: number = 1;

// let boolean: boolean = true;

// const user: TUser = {
//   age: 12,
//   name: 'John',
// };

// const DOM: HTMLElement | null = document.getElementById('root');

// type TTest = string | number | null;

// const test: TTest = 123;

// function test(num1: number) {
//   console.log(num1);
// }

// test(1)

// const showUser = (user: TUser) => {
//   Object.keys(user).forEach((key) => {
//     console.log(`${key}: ${user[key]}`);
//   });
// };

// showUser({ name: 'John', age: 32 });

import React, { useState } from 'react';

type Props = {
  title: string;
  // optional parameter (use"?")
  custom?: number;
};

// const Test = ({ title }: Props) => {
//   const [state, setState] = useState<boolean>(true);
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// };
// or this way
const Test: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Test;
