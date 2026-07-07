function findOdd(arr){
   let result = arr.reduce((acc, current)=>{
    acc[current] = (acc[current] ||0)+1;
    return acc;
   }, {})
   for(const [key, value] of Object.entries(result)){
    if(value%2 !== 0){
         return Number(key);
    }
   }
}
console.log(findOdd([7]));