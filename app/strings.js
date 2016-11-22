exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newString = str.split('');
      for (var i = 0; i < newString.length; i++) {
        if (newString[i] == newString[i + amount]) {
          newString.splice(i, 1);
          i--;
        }
      }
    return newString.join('');
  },

    wordWrap: function(str, cols) {
      var arr = str.split(' ');
      var count = 0;
      for (var i = 0; i < arr.length; i++){
        count += arr[i].length;
        if (count >= cols) {
          arr[i] = arr[i] + '\n';
          count = 0;
        }
        else if (i === arr.length - 1) {
          arr[i] = arr[i];
          count = 0;
        }
        else if (arr[i].length + arr[i + 1].length >= cols) {
          arr[i] = arr[i] + '\n';
          count = 0;
        }
        else {
          arr[i] = arr[i] + ' ';
          count++;
        }
      }
      return arr.join('');
  },

  reverseString: function(str) {
    return str.split("").reverse().join("")
  }
};
