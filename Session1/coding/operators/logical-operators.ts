// example 1
var avg:number = 20; 
var percentage:number = 90; 

console.log("Value of avg: "+avg+" ,Value of percentage: "+percentage);
 
var res:boolean = ((avg>50)&&(percentage>80)); 
console.log("(avg>50)&&(percentage>80): ",res);

var res:boolean = ((avg>50)||(percentage>80)); 
console.log("(avg>50)||(percentage>80): ",res);

var res:boolean=!((avg>50)&&(percentage>80)); 
console.log("!((avg>50)&&(percentage>80)): ",res);

// example 2 short-circuit operators 
var a = 10 
var result:boolean = ( a<10 && a>5)
console.log(result);

// example 3
var a = 10 
var result:boolean = ( a>5 || a<10)
console.log(result);
