function ExampleConstructor () {

}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype)


var x = new ExampleConstructor();

console.log(x);

var y = x instanceof ExampleConstructor;

console.log(y);
