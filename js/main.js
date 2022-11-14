// importuoti {ka} from 'is kur'
// named export import
import { username as uname, town } from './modules/vars.js';
import susumuoti from './modules/sum.js';
import avg from './modules/avg.js';
// default export import
import user from './modules/vars.js';

console.log('main.js');

// const username = 'James';

console.log('`user ${uname} is from ${town}` ===', `user ${uname} is from ${town}`);

console.log('user.name ===', user.name);
console.log('user ===', user);

const a = 10;
const b = 140;

const s1 = susumuoti(a, b);
susumuoti(s1, 400);

// 1. sukurti avg.js modulio faila.
// 2. sukurti funkcija kuri grazina ir atspausdina 3 argumentu vidurki
// 3. exportuot funkija is avg.js
// 4. importuoti ir panaudoti ja main.js su 3 skaiciais.
avg(100, 40, 25);
// 5. aprasyti fetch parsiuntimo funkcija atskirame faile ir panaudoti ja main js kad parsiusti userius is https://reqres.in/api/users?page=1

// 6. exportuoti 2uzduoti is praktiniu uzduociu ir importavus i main.js panaudoti patikrinti ar veikia.
