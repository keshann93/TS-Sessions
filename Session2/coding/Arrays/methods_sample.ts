// concat
var alpha = ["a", "b", "c"]; 
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric); 
console.log("alphaNumeric : " + alphaNumeric );

//every
function isBigEnough(element, index, array) { 
   return (element >= 10); 
} 
          
var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log("Test Value : " + passed );

//filter
function isFilterBigEnough(element, index, array) { 
   return (element >= 10); 
} 
          
var filterPassed = [12, 5, 8, 130, 44].filter(isFilterBigEnough); 
console.log("Test Value : " + filterPassed );

//foreach
let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
});

//indexOf
var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index );

//join
var arr = new Array("First","Second","Third"); 
          
var str = arr.join(); 
console.log("str : " + str );  
          
var str = arr.join(", "); 
console.log("str : " + str );  
          
var str = arr.join(" + "); 
console.log("str : " + str );


//map
var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );

//pop
var numbers = [1, 4, 9]; 
          
var element = numbers.pop(); 
console.log("element is : " + element );  
          
var element = numbers.pop(); 
console.log("element is : " + element );

//push
var numbers = new Array(1, 4, 9); 
var length = numbers.push(10); 
console.log("new numbers is : " + numbers );  
length = numbers.push(20); 
console.log("new numbers is : " + numbers );

//reduce
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );

//reverse
var arr = [0, 1, 2, 3].reverse(); 
console.log("Reversed array is : " + arr );

//some
function isBigEnough(element, index, array) { 
   return (element >= 10); 
          
} 
          
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval ); 
          
var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
console.log("Returned value is : " + retval );