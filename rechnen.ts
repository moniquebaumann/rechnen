import { SortService, Direction } from "https://deno.land/x/sort/mod.ts"

export class Rechnen {

    public static getSumOfDigits(input: number) {
        let counter = 0
        let result = 0
        let inputAsString = input.toFixed(0).toString()
        while (counter < inputAsString.length) {
            result += Number(inputAsString[counter])
            counter++
        }
        return result
    }

    public static getFibonacciSequence(amountOfEntries: number) {
        const result = [0, 1]
        while (result.length < amountOfEntries) {
            result.push(result[result.length - 2] + result[result.length - 1])
        }
        return result
    }

    public static getGoldenRatioRecursive(numberOfRecursiveCalls: number): number {
        let counter = 0
        let result = 0
        return goldenRatioRecursive(numberOfRecursiveCalls, counter, result)
    }

    public static getGoldenRatioFromFibonacci(numberOfElements: number): number {
        const fibonacciSequence = Rechnen.getFibonacciSequence(numberOfElements)
        return fibonacciSequence[fibonacciSequence.length - 1] / fibonacciSequence[fibonacciSequence.length - 2]
    }

    public static getEulersNumber(precision: number): number {
        let counter = 0
        let result = 0
        while (counter < precision) {
            counter++
            result = result + 1 / Rechnen.getFactorial(counter)
        }
        return 1 + result
    }

    public static getFactorial(input: number): number {
        if (input == 0 || input == 1) {
            return 1
        }
        return Rechnen.getFactorial(input - 1) * input
    }

    public static getAmountOutMin(amountIn: number, price: number, slippage: number, decimals: number, inverseFlag: boolean): number {
        let amountOutMin
        if (inverseFlag) {
            amountOutMin = price / (amountIn * (10 ** decimals));
        } else {
            amountOutMin = (amountIn * (10 ** decimals)) / price;
        }
        return amountOutMin - ((amountOutMin * slippage) / 100);
    }

    public static isPrime(input: number): boolean {
        let counter = 0
        let numerator = input
        while (numerator > 0) {
            if (input % numerator === 0) {
                counter++
            }
            numerator--
        }
        return (counter === 2) ? true : false
    }

    public static getPrimes(until: number): number[] {
        let counter = 0
        const result = []
        while (counter < until) {
            counter++
            if (Rechnen.isPrime(counter)) {
                result.push(counter)
            }
        }
        return result
    }

    public static getProductOfArrayEntries(entries: number[]): number {
        return entries.reduce((acc, current) => acc * current, 1);
    }

    public static getPrimeFactors(input: number, sorted: boolean): number[] {
        let primeArray = [];
        let integer = input
        while (integer > 1) {
            for (let i = 2; i <= integer; i++) {
                if (integer % i === 0) {
                    if (Rechnen.isPrime(i) === true) {
                        integer = integer / i
                        primeArray.push(i);
                        continue
                    }
                }
            }
        }   
        return (sorted) ? SortService.sort(primeArray, Direction.ASCENDING) : primeArray
    }
}

function goldenRatioRecursive(numberOfRecursiveCalls: number, counter: number, result: number): number {
    counter++
    if (counter === numberOfRecursiveCalls) {
        return result
    } else {
        return 1 + 1 / goldenRatioRecursive(numberOfRecursiveCalls, counter, result)
    }
}


