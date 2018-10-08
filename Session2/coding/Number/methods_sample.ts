// toFixed
var num1 = new Number(177.234);
console.log("num1.toFixed() is " + num1.toFixed())
console.log("num1.toFixed(2) is " + num1.toFixed(2))
console.log("num1.toFixed(6) is " + num1.toFixed(6))

// toPrecision
var num2 = new Number(7.123456);
console.log(num2.toPrecision());
console.log(num2.toPrecision(1));
console.log(num2.toPrecision(2));

//toString
var num3 = new Number(10);
console.log(num3.toString());
console.log(num3.toString(2));
console.log(num3.toString(8));

//valueOf
var num4 = new Number(10);
console.log(num4.valueOf());