

//Arrays and Loops :

//Task 1 : Speed run !

//sum of array numbers :

// number = "coco"
// console.log(typeof(number))

function sum(array){
    let s = 0 
    for(let i = 0;i < array.length; i++ ){

        if (typeof(array[i])== "string"){
            return `they are string in The element number ${i+1}`
        }
        else{
          s += array[i]
        }
    }
    return `the sum of numbers in the array is ${s}`
}

array = [1,2,3,4,9,5,4]

console.log(sum(array))

//sum of even numbers in the array :

function countEven(array){
   let c = 0 
   for (let i = 0; i < array.length ;i++){
    if (array[i]%2 == 0){
        c++
    }
}
return `the Number of even numbers is ${c}`
}

console.log(countEven(array))

// Double of array numbers :

function DoubleArray(array){

    for(let i = 0; i < array.length ;i++){
        array[i] = array[i]*2 ;
    }
    return `"The Double of the Array : [${array}]"` ;
}

console.log(DoubleArray(array)) ; 




// Pair Socks 
function SocksNumber(array) {
    let T = [];

    for (let i = 0; i < array.length; i++) {
        let found = false;

        for (let j = 0; j < T.length; j++) {
            if (T[j] === array[i]) {
                found = true;
                break;
            }
        }

        if (!found) {
            T.push(array[i]);
        }
    }

    let countSocks = 0 ;
    let result = 0 ;
    for (let i = 0; i <= T.length;i++){
        let c = 0
        for(let j = 0; j<= array.length;j++){
            if (T[i]==array[j]){
              c++
            }
            
        }
        countSocks = c - (c % 2) 
        result += countSocks /2 ; 
    }
    
    
    return result 
    
}

const socks = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
console.log(SocksNumber(socks));


