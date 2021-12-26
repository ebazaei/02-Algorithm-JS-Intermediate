// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// for(var i = 200; i < 2700; i++ ){
//     if (i % 3 === 0){
//         console.log(`${i} = ${i} divisible by 3 = 0`);
//     }else if(i % 5 === 0){
//         console.log(`${i} = ${i} divisible by 5 = 0`);
//     }
// }



// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// let X = [2,1,6,4,-7]
// let arrayRev = [];
// let i = X.length-1;
// while (i >= 0)
//     {
//         arrayRev.push(X[i]);
//         i--;
//     }
// console.log(`${X} Reverse is = ${arrayRev}`);




// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

// let newArray = [];

// for(var i = 1; i < 135 ; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         newArray.push("FizzBuzz");
//     }else if(i % 3 === 0){
//         newArray.push("Fizz");
//     }else if(i % 5 === 0){
//         newArray.push("Buzz");
//     }else{
//         newArray.push(i);
//     }
// }

// console.log(newArray);




// 4. Fibonacci
// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// let num1 = 1;
// let num2 = 0;
// for(let i=0; i< 1000000; i++){
//     console.log(num2);
//     i = num1 + num2;
//     num1 = num2; 
//     num2 = i;
// }



// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// let X=[1,-2,4,1,-40,5];
// console.log(X);
// let newArray2 = [];

// for(let i=0; i< X.length; i++){

//     if (X[i] > 0){
//         newArray2.push(X[i]);
//     }
// }
// console.log(newArray2)


// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

//Metod 1
// function wordselector(wordsel){

//     let stringCharacter = ['Man', 'I','Love','The','Matrix','Program'];
//     console.log(`Original was: ${stringCharacter}`);
//     let star ="";

//     for (let i = 0; i < stringCharacter.length; i++) {
//         if(stringCharacter[i] === wordsel){
//             for (let j = 0; j <  stringCharacter[i].length; j++) {
//                 star+="*";
//             }
//             stringCharacter[i]=star;
//         }
//     }
//     console.log(`Censorship for word: ===>>  ${wordsel}  <<===`);
//     console.log(`After Censorship is: ${stringCharacter}`);
//     console.log(`---------------------------------------`);
// }
// wordselector("Matrix")
// wordselector("Love")


// var x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
// var censoredWord = 'I';
// for (var i = 0; i < x.length; i++){
//    if (x[i] == censoredWord){
//       x[i] = '*'.repeat(x[i].length);
//    };
// }
// console.log(x);

//Metod 2
// let X = ['Man', 'I','Love','The','Matrix','Program'];
// let Censorword = 'Man';
// console.log(X);

// function Censorwordflex(wordje){
    
//     for(i=0;i<X.length;i++){

//         let charachter = X[i].length;
        
//         if (X[i] === wordje){
//             X[i] = '*'.repeat(charachter);
//         }
//     }

//     console.log(X);
// }

// Censorwordflex("Love")