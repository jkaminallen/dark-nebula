exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {  //looking for the first twos, then subtracting them out
    for (var i = 0; i < arr.length; i++){
      if (item == arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray;
    newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if (item == arr[i]) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var duplicateArray = [ ];
    for (var i = 0; i < arr.length; i++){
      if ((arr.indexOf(arr[i],i+1) != -1) && (!duplicateArray.includes(arr[i]))) {
        duplicateArray.push(arr[i]) }
    }
    return duplicateArray;
  },

  square : function(arr) {
    var squareArray = [];
    for (var i = 0; i < arr.length; i++){
      squareArray.push(Math.pow(arr[i], 2));
    }
    return squareArray;
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];
    var idx = arr.indexOf(target);
      while (idx != -1) {
        indices.push(idx);
        idx = arr.indexOf(target, idx +1);
      }
    return indices
  }
};
