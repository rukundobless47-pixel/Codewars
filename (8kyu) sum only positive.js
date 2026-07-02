function positiveSum(arr) {
  let postive = arr.filter((item)=>{
    return item>0;
  });
  return postive.reduce((acc,current)=>{
    acc=acc+current;
    return acc;
  },0)

}
console.log(positiveSum([12,-23,42]))