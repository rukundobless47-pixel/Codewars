function findOdd(arr){
   let result = arr.reduce((acc, current)=>{
    acc[current] = (acc[current] ||0)+1;
    return acc;
   }, {})
   let odd=[];
   for(const [key, value] of Object.entries(result)){
    if(value%2 !== 0){
         odd.push(key);
    }
   }
   return odd;
}
console.log(findOdd([1,2,2,2]));