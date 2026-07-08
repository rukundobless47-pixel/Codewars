function findUnique(numbers) {
  const counts = {};

  for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (const num of numbers) {
    if (counts[num] === 1) {
      return num; 
    }
  }
}