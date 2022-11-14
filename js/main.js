// importuoti {ka} from 'is kur'
// named export import
import { username, town } from './modules/vars.js';
import { sum } from './modules/sum.js';
// default export import
import user from './modules/vars.js';

console.log('main.js');

// const username = 'James';

console.log('`user ${username} is from ${town}` ===', `user ${username} is from ${town}`);

console.log('user.name ===', user.name);
console.log('user ===', user);

const a = 10;
const b = 140;

const s1 = sum(a, b);
sum(s1, 400);
