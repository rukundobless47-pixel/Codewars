function digitalRoot(n) {
    let sum=n;
  while(sum>9){
  let arr = sum.toString().split('').map(Number);
  sum=0;
  for(let i=0; i<arr.length; i++){
          sum += arr[i]; 
  }
}
  return sum;
}
console.log(digitalRoot(49319311));
//1. Elysee
//2. Bruce