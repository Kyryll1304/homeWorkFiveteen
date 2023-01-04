function removeElement(array, value) {
  var index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
