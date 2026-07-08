function deleteNth(arr,n){
const map = new Map();
const result = [];

arr.forEach(e => {
  if (!map.has(e))  {
    map.set(e, 0)
  }

  map.set(e, map.get(e) + 1)

  if (map.get(e) > n) return;
  result.push(e)
});
return result
}
console.log(deleteNth([1,2,1,1,2,2,1,31,3,41,2],3));