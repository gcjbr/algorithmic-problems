// Write a bubble sort algorithm

function bubbleSort(arr) {
  const resArray = [...arr];
  for (let i = 0; i < resArray.length; i++) {
    let currentI = resArray[i];
    for (let y = i + 1; y < resArray.length; y++) {
      let currentY = resArray[y];

      if (currentI > currentY) {
        resArray[y] = currentI;
        resArray[i] = currentY;
        currentI = resArray[i];
        currentY = resArray[y];
      }
    }
  }
  return resArray;
}

console.log(bubbleSort([11, 3, 100, 5, 99, -123, 4323, -12]));
