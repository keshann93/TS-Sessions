var num1:number = 5;
var num2:number = 9;
var negativeNum:number = -20; 

console.log("Value of num1: "+num1); 
console.log("Value of num2 :"+num2);
 
var res:boolean = num1>num2 
console.log("num1 greater than num2: "+res)

res = num1<num2 
console.log("num1 lesser than num2: "+res)  

res = num1>=num2 
console.log("num1 greater than or equal to  num2: "+res)

res = num1<=num2
console.log("num1 lesser than or equal to num2: "+res)  

res = num1==num2 
console.log("num1 is equal to num2: "+res)  

res = num1!=num2  
console.log("num1 is not equal to num2: "+res)

// res = negativeNum > 0 ? "positive":"non-positive"; // will this compile if it won't then why
var res:string = negativeNum > 0 ? "positive":"non-positive";
console.log(res);