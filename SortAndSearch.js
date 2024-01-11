
// //Bubble Sort : 

function BubbleSort(array) {
    
for (let index = 0; index < array.length; index++) {
   
        if(array[index]>array[index+1]){
            [array[index],array[index+1]] = [array[index+1],array[index]] 
            // Reset the index to -1 to restart from tje first
            index=-1

            
         }
    
    
    
}}


const table =[7,5, 6, 9, 1, 11, 2]

// task 2 Selection Sort :
function SeletionSort(array){
for (let index = 0; index < table.length; index++) {
   var min = table[index]
   var indexmin = index
    for (let j = index; j <= table.length; j++) {
         if(table[j]<min ){
            min = table[j]
            indexmin = j
         }

   }
   [table[index],table[indexmin]]= [table[indexmin] , table[index]]
       
}
}



//Task 4 : LinearSearch

const tablee = [1,2,3,4,5,6]
function LinearSearch(array,number){
    let isIn = false
    let indexOf = 0
    for (let index = 0; index < array.length; index++) {
        if(array[index]==number){
            isIn = true
            indexOf = index +1
            break
        }
        
    }
    if (isIn){
        return `the ${number} is in the array at postion ${indexOf}`
    }
    else{
        return `"the number is not in the array"`
    }
}
console.log(LinearSearch(tablee,4))
