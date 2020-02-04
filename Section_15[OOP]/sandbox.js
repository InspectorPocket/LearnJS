const userOne = {
    username: 'ryu',
    email: 'ryu@gmail.com',
    login() {
        console.log('user has logged in');
    },
    logout() {
        console.log('user has logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = new User('pierce@gmail.com', 'pierce');
