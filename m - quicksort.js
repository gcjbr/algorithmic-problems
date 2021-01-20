
  
const quicksort = (arr)=> {
  if(arr.length <= 1) {
    return arr;
  }

  const newArr = [...arr];
  const smallArr = [];
  const bigArr = [];
  const pivot = newArr.shift();
  const equalArr = [pivot];
  
  while(newArr.length) {
    const elm = newArr.shift();
    if (elm < pivot) {
      smallArr.push(elm);
    } else if (elm > pivot) {
      bigArr.push(elm);
    } else {
      equalArr.push(elm);
    }
  }


  const smallSorted = quicksort(smallArr);
  const bigSorted = quicksort(bigArr);

  return [...smallSorted, ...equalArr, ...bigSorted];


};


console.log(quicksort([10, 48, 5, 33, -3, 99]));