function findOddNames(list) {
   let sum=0;
   for(let i=0; i<list.length; i++){
      sum += list.charCodeAt(i);
   }

   list.filter((item)=>{
    sum += item.charCodeAt(i);
    if(sum)
   })

}
console.log(findOddNames( [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]));