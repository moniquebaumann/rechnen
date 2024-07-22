import { assertEquals } from "https://deno.land/std@0.224.0/testing/asserts.ts"
import { Rechnen } from "./rechnen.ts"

Deno.test("getSumOfDigits", async () => {
    assertEquals(55, Rechnen.getSumOfDigits(Rechnen.LIGHTSPEED))
})
Deno.test("getFibonacciSequence", async () => {
    assertEquals([0, 1, 1, 2, 3, 5, 8, 13, 21], Rechnen.getFibonacciSequence(9))
})
Deno.test("getGoldenRatioRecursive", async () => {
    assertEquals(1.618033988749895, Rechnen.getGoldenRatioRecursive(45))
})
Deno.test("getGoldenRatioFromFibonacci", async () => {
    assertEquals(1.618033988749895, Rechnen.getGoldenRatioFromFibonacci(45))
})
Deno.test("getFactorial", async () => {
    assertEquals(6, Rechnen.getFactorial(3))
})
Deno.test("getEulersNumber", async () => {
    assertEquals(2.7182818284590455, Rechnen.getEulersNumber(45))
})
Deno.test("getAmountOutMin", async () => {
    const decimals = 3
    assertEquals(99, Rechnen.getAmountOutMin(100, 1, 1, decimals, false) / (10 ** decimals))
    assertEquals(90, Rechnen.getAmountOutMin(100, 1, 10, decimals, false) / (10 ** decimals))
    assertEquals(0.1, Rechnen.getAmountOutMin(100, 1000, 0, decimals, false) / (10 ** decimals))
    assertEquals(10, Rechnen.getAmountOutMin(1, 10, 0, decimals, true) * (10 ** decimals))
})
Deno.test("isPrime", async () => {
    assertEquals(false, Rechnen.isPrime(1))
    assertEquals(false, Rechnen.isPrime(10))
    assertEquals(true, Rechnen.isPrime(5))
})
Deno.test("getPrimes", async () => {
    assertEquals([2, 3, 5, 7], Rechnen.getPrimes(10))
})
Deno.test("getProductOfArrayEntries", async () => {
    assertEquals(6, Rechnen.getProductOfArrayEntries([2, 3]))
})
Deno.test("getPrimeFactors", async () => {
    assertEquals([2, 5], Rechnen.getPrimeFactors(10, false))
    assertEquals([3, 3], Rechnen.getPrimeFactors(9, false))
    assertEquals([2, 2, 3, 3, 5], Rechnen.getPrimeFactors(180, true))
})
