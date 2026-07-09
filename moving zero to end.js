function moveZeros(arr) {
   let nonZeroes = arr.filter((item)=>{
        return item !==0;
    })
    let zeroes = arr.filter((item)=>{
        return item ===0;
    })
  return [...nonZeroes, ...zeroes]
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))