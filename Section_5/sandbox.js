// object literals

let user = {
    name: 'phil mitchell',
    age: '56',
    email: 'phil.mitchel@ardbloke.com',
    location: 'strangeways',
    blogs: ['Breaking out of prison 101', 'I will bang out your dad'],
    // below can be shortened to login() see below examples.
    login: function() {
        console.log(name.toUpperCase(),'logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    // in order to use this in the context of a method, you cannot use arrow functions.
    // an arrow function will make the 'this' refer to the window and not the object
    logBlogs() {
        // console.log(this.blogs[0]);
        console.log('the user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.logBlogs();
