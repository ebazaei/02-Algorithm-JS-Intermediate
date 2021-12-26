// Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// for(var i = 200; i < 2700; i++ ){
//     if (i % 3 === 0){
//         console.log(`${i} = ${i} divisible by 3 = 0`);
//     }else if(i % 5 === 0){
//         console.log(`${i} = ${i} divisible by 5 = 0`);
//     }
// }


// Shift the Values
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




