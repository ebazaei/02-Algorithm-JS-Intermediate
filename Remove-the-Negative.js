// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

let X=[1,-2,4,1,-40,5];
console.log(X);
let newArray2 = [];

for(let i=0; i< X.length; i++){

    if (X[i] > 0){
        newArray2.push(X[i]);
    }
}
console.log(newArray2)