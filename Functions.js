
//Task 1 : 
// function 1 :

function factorial(num){
    if (num==0 || num==1){
        return 1
    }
    else{
     let fact = 1
     for (let n=1;n <= num ;n++){
         fact = fact*n 
     }
     return fact ;
    }
}

console.log(factorial(3))

//Function 2 :
function NumberOfDigits(Num){
    let  count = 0
    if (Num === 0) {
        count = 1;
    } else {
        // console.log("I'm in the else")
        // Loop to count digits
        while (Num >= 1) {
            Num = Num / 10;
            count++;
        }
     return `the number of the digits is ${count}` ;
    }
}
console.log(NumberOfDigits(12883))

//fanction 3 :

function NumberToDay(Number){
    switch(Number){
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednsday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("Sunday");
            break; 
        default:
            console.log("Unvalid Day")                               
    }
    
}
NumberToDay(4)

// function 4 :

function SetMax(a,b,c){
    if (a > b && a > c){
        max = a
    }
    if(b > c && b > a){
        max = b
    }
    else {
        max = c
    }
    console.log(`The Bigger number is :${max}`)
}

SetMax(1,5,8)

// Function 5 :

function ExamGrade(score){
    if (score < 0 || score >100){
        console.log('You must be enter a positive Value between 0 and 100');
    }
    if (score>= 0 &&score <=15){
        console.log("Grade is F")
    }
        
        
    if (score> 15 && score <=40){
        console.log("Grade is E")
    }
        
    if (score> 40 && score <=55){
        console.log("Grade is D")
    }
        
    if (score> 55 && score <=70){
        console.log("Grade is C")
    }
        
    if (score> 70 && score <=85){
        console.log("Grade is B")

    }
        
    if (score> 85 &&score <=100){
        console.log("Grade is A")
    }
        

}

ExamGrade(50)

// Task 2 :
function Combine(n,m){
    if (n==1 || n<m){
        return 0 ;
    }
    const FactN = factorial(n)
    const Division = factorial(n-m) * factorial(m)
    
    return (FactN/Division);

}

console.log(Combine(5,2))

// Task 3 :

function calcule(a,op,b){

    if (op == "+"){
        return a + b ;
    }
    if(op == "-"){
        return a - b ;
    }
    if(op == "*"){
        return a * b ;
    }
    if(op == "/"){
        if(b == 0){
            return "We can't divise to 0 !"
        }
        else{
            return a / b ;
        }
    }
    if (op == "%"){
        if(b == 0){
            return "We can't divise to 0 !"
        } 
        else{
            return a % b ;
        }  
       
    }
    if(op=="c"){
        return Combine(a,b)
    }
}

console.log(calcule(5,"c",2))

function test(array) {
    let T = [];

    for (let i = 0; i < array.length; i++) {
        let found = false;

        // Cette boucle vérifie si l'élément actuel de 'array' existe déjà dans 'T'
        for (let j = 0; j < T.length; j++) {
            if (T[j] === array[i]) {
                found = true; // L'élément a été trouvé, on marque 'found' comme vrai
                break;        // On sort de la boucle car l'élément a déjà été trouvé
            }
        }

        // Si l'élément n'a pas été trouvé dans 'T', on l'ajoute à 'T'
        if (!found) {
            T.push(array[i]);
        }
    }

    return T;
}

const socks = [1, 2, 3, 1, 2, 4];
console.log(test(socks));

