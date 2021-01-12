// Write a binary search algorithm that takes a sorted array and returns N position

const binarySearch = (arr, n, offset = 0) => {
  const pointer = Math.floor(arr.length / 2);
  if (arr.length === 0 || (arr.length === 1 && arr[pointer] !== n)) {
    return false;
  }

  if (arr[pointer] === n) {
    return pointer + offset;
  } else if (arr[pointer] < n) {
    offset = offset + pointer;
    return binarySearch(arr.slice(pointer, arr.length), n, offset);
  } else {
    return binarySearch(arr.slice(0, pointer, offset), n);
  }
};

console.log(binarySearch([3, 5, 7, 11, 19], 19));
console.log(binarySearch([3, 5, 7, 11, 19], 5));
console.log(binarySearch([3, 5, 7, 11, 19], 10));
