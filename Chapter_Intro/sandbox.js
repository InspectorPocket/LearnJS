const speak = function(name = 'luigi', time = 'night') {
    console.log(`I hate ${name} when it is ${time} time.`);
};

const calcArea = function(radius) {
    return 3.14 * radius**2;
};

const area = calcArea(10);

if(area > 200) {
    console.log(`Wow, that is a fat area! ${area} is the biggest I have ever seen.`);
} else {
    console.log(`Pfft only ${area}. My willy is bigger than that.`)
};

// console.log(area);

speak();