function findMIssingLetter(array){
    let arr = array.map((letter)=>letter.toLowerCase());
    const result=[];
    const set = new Set(arr)
    const min = arr[0].charCodeAt(0);
    const max = arr[arr.length -1].charCodeAt(0);
     
    for(let i=min; i<=max; i++){
        let letter = String.fromCharCode(i);
        if(!set.has(letter)){
        result.push(letter)
        }
    }
    return result;
}
console.log(findMIssingLetter(['a','b','z']))