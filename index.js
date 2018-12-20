function findMinAndRemove(array) {
  let minIndex = 0;
  let minValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return minValue;
}

function insertionSort(array) {
  let newArray = [];
  while (array.length != 0) {
    let value = findMinAndRemove(array);
    newArray.push(value);
  }
  return newArray;
}
