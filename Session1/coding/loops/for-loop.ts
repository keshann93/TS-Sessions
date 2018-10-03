/* syntax for loop
for (initial_count_value; termination-condition; step) {
   //statements 
}
*/

// example 1 factorial
var num:number = 5; 
var i:number; 
var factorial = 1; 

for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log("The factorial  is "+factorial)


// example 2 with continue keyword
var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count)    //outputs 10 