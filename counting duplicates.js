function duplicateCount(text){
  let arr = text.toLowerCase().toString().split('');
  let count = arr.reduce((acc, current)=>{
    acc[current]= (acc[current] || 0)+1;
    return acc;
  }, {})
  let counting=0;
  for(let [key, value] of Object.entries(count)){
    if(value > 1){
      counting++;
    }
  }
  return counting;
}
console.log(duplicateCount('bless'))