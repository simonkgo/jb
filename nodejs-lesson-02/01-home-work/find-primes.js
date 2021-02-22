function findPrimes(min, max) {
    const primes = [];
    for(let i = min; i <= max; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(n) {
    const limit = Math.sqrt(n);
    for(let i = 2; i <= limit; i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return true;
}

module.exports = findPrimes;