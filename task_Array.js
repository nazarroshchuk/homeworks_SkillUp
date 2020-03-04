// compareArray

function compareArrays (a, b) {
  for ( let i = 0; i < a.length; i++) {
    if ( a[i] !== b[i]) {
      return false
    }
  } return true
}

// reverse Array

//variant_1
array.reverse();

//variant_2
function reverseArray(array) {
  let reversArray = [];
  for ( let i = array.length-1; i >= 0; i--) {
    reversArray.push(array[i]);
    
  } 
  array = reversArray;
  return  array;
}

// sort Array

array.sort(function(a, b) {
  return a - b;
});
maxValue = array[array.length-1];

// maxValue Array

//variant_1
function maxValue(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if ( maxNumber < array[i]) {
      maxNumber = array[i];
    }
  } return maxNumber;
}

//variant_2
array.sort(function(a, b) {
  return a - b;
});
maxValue = array[array.length-1];


// sum Array

// variant_1
function summArray(array) {
  let sum = 0;
  for ( let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//variant_2
var sum = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);







