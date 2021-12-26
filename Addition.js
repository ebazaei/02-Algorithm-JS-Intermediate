// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

for(var i = 200; i < 2700; i++ ){
    if (i % 3 === 0){
        console.log(`${i} = ${i} divisible by 3 = 0`);
    }else if(i % 5 === 0){
        console.log(`${i} = ${i} divisible by 5 = 0`);
    }
}