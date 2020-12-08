/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var x = 0;
    for (i = 0; i < numbers.length; i++) {
     x += numbers[i];
    };
    return x;
  },
  getAverage: function (numbers) {
    var x = 0;
    for (i = 0; i < numbers.length; i++) {
      x += numbers[i];
    }
    var y = x / numbers.length;
    return y;
  }
}
