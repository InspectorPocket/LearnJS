// constructor functions
function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function() {
        console.log(`${username} has logged in`);
    };
}

// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     // don't comma seperate in classes
//     login() {
//         console.log(`${this.username} logged in`);
//         return this;
//     }
//     logout() {
//         console.log(`${this.username} logged out`);
//         return this;
//     }
//     incScore() {
//         this.score++;
//         console.log(`${this.username} has a score of: ${this.score}`);
//         return this;
//     }
// };

// class Admin extends User {
//     constructor(username, email, title) {
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user) {
//         users = users.filter(u => u.username !== user.username);
//     }
// };

const userOne = new User('mario', 'mario@nintendo.com');
const userTwo = new User('luigi', 'luigi@nintendo.com');

console.log(userOne, userTwo);
userOne.login();
