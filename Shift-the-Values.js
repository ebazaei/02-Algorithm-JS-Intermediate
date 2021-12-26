// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

let X = [2,1,6,4,-7]
let arrayRev = [];
let i = X.length-1;
while (i >= 0)
    {
        arrayRev.push(X[i]);
        i--;
    }
console.log(`${X} Reverse is = ${arrayRev}`);