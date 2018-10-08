// charAt
var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charAt(0));
console.log("str.charAt(1) is:" + str.charAt(1));
console.log("str.charAt(2) is:" + str.charAt(2));

// concat
var str1 = new String("This is string one");
var str2 = new String("This is string two");
var str3 = str1.concat(str2);
console.log("str1 + str2 : " + str3)

//indexOf
var str1 = new String("This is string one");

var index = str1.indexOf("string");
console.log("indexOf found String :" + index);

var index = str1.indexOf("one");
console.log("indexOf found String :" + index);


//slice
var str2 = new String("Apples are round, and apples are juicy.");
var sliced = str.slice(3, -2);
console.log(sliced);

//split
var str = "Apples are round, and apples are juicy.";
var splitted = str.split(" ", 3);
console.log(splitted)

//substr
var str = "Apples are round, and apples are juicy.";
console.log("(1,2): " + str.substr(1, 2));
console.log("(-2,2): " + str.substr(-2, 2));
console.log("(1): " + str.substr(1));

//substring
var str: string = "Apples are round, and apples are juicy.";
console.log("(1,2): " + str.substring(1, 2));
console.log("(0,10): " + str.substring(0, 10));
console.log("(5): " + str.substring(5));

//toLowerCase
var str: string = "Apples are round, and Apples are Juicy.";
console.log(str.toLowerCase())

//toString
var str = "Apples are round, and Apples are Juicy.";
console.log(str.toString());

//toUpperCase
var str = "Apples are round, and Apples are Juicy.";
console.log(str.toUpperCase());

// valueOf
var str: string = new String("Hello world");
console.log(str.valueOf());