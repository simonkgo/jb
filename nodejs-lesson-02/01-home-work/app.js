const findPrimes = require("./find-primes");
const colorPrinter = require("./color-printer");
const filesHandler = require("./files-handler");

const primes = findPrimes(10, 20);
colorPrinter(primes);
filesHandler.saveArray("./primes.txt", primes);
const primes2 = filesHandler.readArray("./primes.txt");
console.log(primes2);
console.log('hello');
