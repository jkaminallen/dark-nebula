exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    for (var i = 0; i < str.length; i++){
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(str[i])) {
      return true;
      break
    }
  }
  return false;
  },

  containsRepeatingLetter : function(str) {
    var hasDuplicates = (/([a-zA-Z])\1/).test(str);
    return hasDuplicates
  },

  endsWithVowel : function(str) {
    var endsVowel = /[aeiouAEIOU]/.test(str[str.length -1]);
    return endsVowel
  },

  captureThreeNumbers : function(str) {
    substring = /\d{3}/.exec(str)
    if (substring == null) {
      return false;
    }
    else {
      return substring[0];
    }
  },

  matchesPattern : function(str) {
    var phoneNumber = /^\d{3}(\-\d{3})*(\-\d{4})$/
     return phoneNumber.test(str);
  },

  isUSD : function(str) {
    var moneyMaker = /^\$(\d{1,3}(\,\d{3})*)(\.\d{2})?$/;
    return moneyMaker.test(str);
  }
};
