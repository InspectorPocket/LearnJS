// constructor functions
function User(username, email) {
    this.username = username;
    this.email = email;
    // this.login = function() {
    //     console.log(`${username} has logged in`);
    // };
}

User.prototype.login = function() {
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function() {
    console.log(`${this.username} has logged out`);
    return this;
}

const userOne = new User('mario', 'mario@nintendo.com');
const userTwo = new User('luigi', 'luigi@nintendo.com');

console.log(userOne, userTwo);
userOne.login().logout();
