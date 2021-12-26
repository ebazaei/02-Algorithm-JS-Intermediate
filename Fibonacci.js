// 4. Fibonacci
// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

let num1 = 1;
let num2 = 0;
for(let i=0; i< 1000000; i++){
    console.log(num2);
    i = num1 + num2;
    num1 = num2; 
    num2 = i;
}