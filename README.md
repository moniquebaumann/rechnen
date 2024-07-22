# Rechnen
🦕 module for celebrating magics of math


## Usage Examples
```ts 

import { Rechnen } from "https://deno.land/x/rechnen/mod.ts"


console.log(Rechnen.getSumOfDigits(Rechnen.LIGHTSPEED))
console.log(Rechnen.getFibonacciSequence(9))
console.log(Rechnen.getGoldenRatioRecursive(45))
console.log(Rechnen.getGoldenRatioFromFibonacci(45))
console.log(Rechnen.getFactorial(3))
console.log(Rechnen.getEulersNumber(45))

console.log(Rechnen.isPrime(5))
console.log(Rechnen.getPrimes(10))
console.log(Rechnen.getProductOfArrayEntries([2, 3]))
console.log(Rechnen.getPrimeFactors(10, false))
console.log(Rechnen.getPrimeFactors(180, true))


const decimals = 3
console.log(Rechnen.getAmountOutMin(100, 1, 1, decimals, false) / (10 ** decimals))
console.log(Rechnen.getAmountOutMin(100, 1, 10, decimals, false) / (10 ** decimals))
console.log(Rechnen.getAmountOutMin(100, 1000, 0, decimals, false) / (10 ** decimals))
console.log(Rechnen.getAmountOutMin(1, 10, 0, decimals, true) * (10 ** decimals))


```


## Sponsored By
[Geo-Caching.org](https://Geo-Caching.org) 
