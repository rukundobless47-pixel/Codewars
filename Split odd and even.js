function findOddNames(list) {
  let sum=0;
  let oddsum=0;
let mapped= list.map((item)=>{
  return item.firstName;
  
})
for(let i=0; i<mapped.length; i++){
   sum += mapped[i].charCodeAt(i);
   if(sum%2 !==0){
    oddsum = sum;
   }
}
return 
}
console.log(findOddNames( [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]));









function findOddNames(list) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    let sum = 0;
    let name = list[i].firstName;

    for (let j = 0; j < name.length; j++) {
      sum += name.charCodeAt(j);
    }

    if (sum % 2 !== 0) {
      result.push(list[i]); // return the whole object
    }
  }

  return result;
}

console.log(findOddNames([
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel' }
]));