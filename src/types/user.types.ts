// export type TUser = {
//   name: string;
//   age: number;
// };

// interface IUser {
//   name: string;
//   age: number;
// }

// interface IUserAdmin extends IUser {
//   fullAccess: boolean;
// }

// const DOM = document.getElementById('root');

// DOM?.addEventListener('click', {});

// function Button(params:type) {
//   return (<>)
// }

// export default Button

// function Button(type: EButton) {
//   console.log('type: ', type);

//   return (
//     <>
//     <button type{type} />
//   </>)
// }

// Button(EButton.BUTTON);
// Button(EButton.RESET);
// Button(EButton.SUBMIT);

type TUser = {
  name: string;
  age: number;
  sayHi: (value: number) => number;
};

const user: TUser = {
  name: 'John',
  age: 25,
  sayHi(value: number) {
    console.log(`Hi, my name is ${this.name}`);

    return 12;
  },
};

// типізація функції
// const showUser = (user: TUser): boolean => {
//   return true;
// };


type User<T = any> = {
  name: string;
  age: number;
  custom: T;
};