function splitOddAndEven(n) {
    const arr=n.toString().split('');
    let even=[];
    let result;
     for(i=0; i<arr.length; i++){
       if(arr[i]%2 === 0){
          result=even.push(arr[i]);
       }
     }
     return result;
    }
console.log(splitOddAndEven(213436))