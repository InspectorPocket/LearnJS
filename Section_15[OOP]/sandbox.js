class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    // don't comma seperate in classes
    login() {
        console.log(`${this.username} logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} logged out`);
        return this;
    }
    incScore() {
        this.score++;
        console.log(`${this.username} has a score of: ${this.score}`);
        return this;
    }
};

const userOne = new User('mario', 'mario@nintendo.com');
const userTwo = new User('luigi', 'luigi@nintendo.com');

userOne.login().incScore().logout();