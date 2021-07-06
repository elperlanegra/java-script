let arr = [3, 1, 2, 5, 8, 10, 9, 6];

const selectionSort = (arr) => {
  let tam = arr.length;
  let aux = 0;
  for (let i = 0; i < tam; i++) {
    let indMin = i;
    for (let j = i + 1; j < tam; j++) {
      if (arr[indMin] > arr[j]) {
        indMin = j;
      }
    }
    aux = arr[i];
    arr[i] = arr[indMin];
    arr[indMin] = aux;
    console.log(arr);
  }
};

selectionSort(arr);
