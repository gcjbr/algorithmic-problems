function mergeSort(arr) {

  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr.reverse() : arr;
  }
  if(arr.length < 2) {
    return arr;
  }

  const index = Math.floor(arr.length/2);
  const left = arr.slice(0, index);
  const right = arr.slice(index);
  const sorted = mergeSort(left).concat(mergeSort(right)).sort((a,b)=> a-b);
  return sorted;
  
}



console.log(mergeSort([-10, 33, 5, 10, 3, -19, -99, 100]));