function mostFrequentItemCount(collection) {
  let count=collection.reduce((acc, current)=>{
    acc[current]=(acc[current] || 0)+1;
    return acc
  }, {})
  let result=[];
  if(collection.length ===0)return 0;
  for(let [key,value] of Object.entries(count)){
    result.push(value)
  }
  return Math.max(...result);
}
console.log(mostFrequentItemCount([]));