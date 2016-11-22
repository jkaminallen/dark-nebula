exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    var start = 2;
    while (start < Math.sqrt(num)) {
      if (num % start++ < 1)
      return false;
    }
    return true;
  },

  arraySum : function(array) {
    return array.reduce((a, b) => a + b, 0);
  },

  fizzBuzz : function(num) {
    if (typeof num === 'number') {
        if (num % 15 == 0) {
          return 'fizzbuzz';
        }
        else if (num % 5 == 0) {
          return 'buzz';
        }
        else if (num % 3 == 0) {
          return 'fizz';
        }
        else {
          return num;
        }
    }
    return false;
  }
};
