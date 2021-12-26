// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

//Metod 1
function wordselector(wordsel){

    let stringCharacter = ['Man', 'I','Love','The','Matrix','Program'];
    console.log(`Original was: ${stringCharacter}`);
    let star ="";

    for (let i = 0; i < stringCharacter.length; i++) {
        if(stringCharacter[i] === wordsel){
            for (let j = 0; j <  stringCharacter[i].length; j++) {
                star+="*";
            }
            stringCharacter[i]=star;
        }
    }
    console.log(`Censorship for word: ===>>  ${wordsel}  <<===`);
    console.log(`After Censorship is: ${stringCharacter}`);
    console.log(`---------------------------------------`);
}
wordselector("Matrix")
wordselector("Love")


var x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
var censoredWord = 'I';
for (var i = 0; i < x.length; i++){
   if (x[i] == censoredWord){
      x[i] = '*'.repeat(x[i].length);
   };
}
console.log(x);


//Metod 2

let X = ['Man', 'I','Love','The','Matrix','Program'];
let Censorword = 'Man';
console.log(X);

function Censorwordflex(wordje){
    
    for(i=0;i<X.length;i++){

        let charachter = X[i].length;
        
        if (X[i] === wordje){
            X[i] = '*'.repeat(charachter);
        }
    }

    console.log(X);
}

Censorwordflex("Love")