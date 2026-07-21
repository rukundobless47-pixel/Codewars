function removeSmallest(numbers) {
    let notsmall;
    let arr=[];
    let small = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((item)=>{
        return item !== numbers[small];
    })

}
console.log(removeSmallest([5, 3, 2, 1, 4]))