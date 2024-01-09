

// Task 1 :Even or Odd
function OddOrEven(n){

    if (n%2 == 0){
        console.log('the number is Even')
    }
    else{
        console.log('The number is Odd')
    }

}
// OddOrEven(4)

// Ternary Operator :

const Number = 6
Number%2 == 0 ? console.log('Number is Even') : console.log("Number is odd") ;

//Task 2 : Days of The week 

var day = 4 
var day = 4;

switch(day){
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

// Task 3 : Maximum

let max = 0;

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
    console.log("The Bigger number is :",max)
}

let a = -15;
let b = 6;
let c = 2.6;

SetMax(a,b,c)
//Task 4 : The Teacher 

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

ExamGrade(0)