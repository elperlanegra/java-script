function bubbleSort(arr) {
  if (arr.length === 0) {
    return arr;
  } else {
    let i, j;
    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}

const numbers = new Array(20).fill(0).map(() => Math.floor(Math.random() * 11));
console.log(numbers);
console.log(bubbleSort(numbers));
