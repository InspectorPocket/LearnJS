let userName = 'Joddde'; // input value from user
let currentTime = 'night'; //get current time from computer clock

const speak = function(name = userName, time = currentTime){
    console.log(`Hello ${name}, it is ${time} time.`);
}

// input your details
speak('dante');
