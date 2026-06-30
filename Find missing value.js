function findMissingNumber(arr){
    const set = new Set(arr);
    const min = Math.min(... arr);
    const max = Math.max(... arr);
    let result = [];

  for(let i=1; i<=max; i++){
    if(!set.has(i)){
        result.push(i)
    }
  }
  return result;
}
console.log(findMissingNumber([1,2,3,4,5,6,8,20]));