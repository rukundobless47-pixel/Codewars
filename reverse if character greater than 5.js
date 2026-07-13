function spinWords(string){
    let reversed = [];
    let result;
    let arr = string.split(' ');
   let final= arr.map(element => {
    if(element.length>5){
       result = element.split('').reverse().join('');
    }else{
       result = element;
    }
    return result;
   });
   return final.join(' ')
}
console.log(spinWords('Seriously this is the last one'))