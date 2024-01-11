

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


function PairSocks(array){
    let result = 0 ;
    let c = 0 ;
    const T = [10,20] ;
    for(let i = 0; i < array.length ;i++){ 
         if(T.length == 0){
            T.push(array[i])
            console.log("coco")
           }
           else{
            for (let j = 0; j < T.length ;j++){
             console.log(T.length)
             if(T[j]!=array[i]){
                T.push(array[i])
             }
             
            }
           }
           
       
    
}
// // return T ; 

    for(let i = 0; i < T.length ;i++){
        let NumberOfPair = 0
        let NumberOfRep = 0
      for(let j = 0; j < array.length ;j++){
         if(T[i]==array[j]){
           c++
         }
        NumberOfPair = (NumberOfRep - (NumberOfRep%2))
        result += NumberOfRep ;
        console.log(NumberOfPair)
    }
    result += c-(c%2)

}
     return `The number of pairs is ${result}`
}
socks = [10,20,10,20,10,10,30]
 console.log(PairSocks(socks))


function test(array){

    T = []
    for (let i = 0; i < array.length; i++) {
        if(T.length == 0 ){
            T.push(array[i])
        }
        else{
            for(let j = 0 ; j<T.length;j++){
              for (let k = 0; k < array.length; k++) {
                if (T[j] != array[k]){
                   T.push(array[k])
                }
                
              }
            }
        }
    }
    return T ;
 }
function test(array) {
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
console.log(test(socks));


