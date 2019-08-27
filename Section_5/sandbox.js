// object literals
// use {} to set an object 

let user = {
    name: 'phil mitchell',
    age: '56',
    email: 'phil.mitchel@ardbloke.com',
    location: 'strangeways',
    blogs: ['Breaking out of prison 101', 'I will bang out your dad']
};

// user.age = 20;

console.log(user);
console.log(user.age);

const key = 'name';

console.log(user[key]);

user['name'] = 'santa claus';
console.log(user['name']);

console.log(typeof user);
