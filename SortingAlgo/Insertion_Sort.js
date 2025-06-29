// JavaScript Program for InsertionsSort
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      console.log(`Moving ${arr[j]} to position ${j + 1}`);
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));
