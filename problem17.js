function delayFunction(fn, delay) {
    return (...args) => {
        setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Example usage
const greet = name => console.log(`Hello, ${name}!`);

const delayedGreet = delayFunction(greet, 2000); // 2-second delay

delayedGreet("Piyush"); // Will print "Hello, Piyush!" after 2 seconds
