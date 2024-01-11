

//Task 1 Factorial :

let num = 6
let fact = 1

if (num==0 || num==1){
    console.log(1)
}
else{
 for(let n=1;n <= num ;n++){
     fact = fact*n
 }
}
console.log(fact)


//Task 2 Length Of a Number :

// let Num = 1234567 
// let C = 0

// do {
//     Num =Num/10
//     C = C++
// } while (Num >=0);

// console(C)

// while(Num!==0){
//     Num = Num / 10 ;
//     C++ ;
// }
// console.log(C);

var number = 1235429;
var count = 0;
var tempNum = number;

// Handle the case when num is 0 separately
if (tempNum === 0) {
    count = 1;
} else {
    // Loop to count digits
    while (tempNum >= 1) {
        tempNum = tempNum / 10;
        count++;
    }
}

console.log(`Number of digits in ${number} is: ${count}`);








const height = 5

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) {
            process.stdout.write(" ");
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }

        console.log();
    }

    for (let i = 0; i < height; i++) {
        console.log("    |");
    }




