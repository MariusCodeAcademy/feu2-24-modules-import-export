'use strict';
console.log('vars.js');

export const username = 'Mike';

const user = {
  name: 'James',
  age: 25,
};

function sayHi() {
  console.log('hello from vars');
}

sayHi();

export default user;
