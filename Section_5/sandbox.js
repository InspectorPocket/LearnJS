// object literals
const name = 'pee-pee';

let user = {
    name: 'phil mitchell',
    age: '56',
    email: 'phil.mitchel@ardbloke.com',
    location: 'strangeways',
    blogs: ['Breaking out of prison 101', 'I will bang out your dad'],
    login: function() {
        console.log(name.toUpperCase(),'logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs: function() {

    }
};

let status = true;

if (status) {
    user.login();
} else {
    user.logout();
}

name.toUpperCase();
