const findPrimes = require("./find-primes");
const colorPrinter = require("./color-printer");
const filesHandler = require("./files-handler");

const primes = findPrimes(10, 20);
colorPrinter(primes);
filesHandler.saveArray("./primes.txt", primes);
const primes2 = filesHandler.readArray("./primes.txt");
console.log(primes2);
<<<<<<< HEAD

console.log("testing this again");
=======
console.log("test");
console.log("test");
>>>>>>> 6131052216383c5ccbc9a8e499551d4183bbb2cb
