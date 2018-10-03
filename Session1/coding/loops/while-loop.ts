/* syntax for loop
while(condition) { 
   // statements if the condition is true 
}
*/

// example 1 factorial
var num:number = 5; 
var factorial:number = 1; 

while(num >=1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is "+factorial); 


// example 2 while loop with break keyword
var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   i++ 
}  //outputs 5 and exits the loop
