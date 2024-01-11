
//Task 3 : Most Occurent 
function MostOne(array){
    let T = [];
    let MaxC = 0 ;
    let Max = 0 ;
    // Set a new Table T for no repetition
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

    if(T.length<array.length){
     for (let i = 0; i < T.length; i++) {
        let C = 0
        for (let j = 0; j < array.length; j++) {
            if(T[i]==array[j]){
             C ++
            }
            
        }
        if(C>Max){
            MaxC = C
            Max = T[i]

        }
        
        }
        return ` ${Max} is the most accurred number , number of repetition is ${MaxC}`
    }
    else{
        return `There is No repetitions in The Table`
    }
}


const array = [3, 2, 2, 7, 2]
console.log(MostOne(array))