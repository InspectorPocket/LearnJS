class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
    }
};

const userOne = new User('mario', 'mario@nintendo.com');
const userTwo = new User('luigi', 'luigi@nintendo.com');

console.log(userOne, userTwo);


// the 'new' keyword
// 1. creates empty object 
// 2. binds value of 'this' to the new empy object
// 3. calls constructor to 'build' the object