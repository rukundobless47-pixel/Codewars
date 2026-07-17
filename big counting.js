function countBits(n) {
  let count=0;
  let arr=[];
  while(n>0){
    if(n%2 === 0 || n%2 ===1){
        arr.push(n%2);
        n=Math.floor(n/2);
  }
}
for(let element of arr){
    if(element===1){
        count++
    }
}
return count;
}
console.log(countBits(7));