let SumElements = (arr) => {
 console.log(arr); // [10, 20, 40, 60, 90]
 let sum = 0;
 for (let element of arr) {
  sum += element;
 }
 console.log(sum); // 220. 
}
SumElements([10, 20, 40, 60, 90]); 


let SumElements = (...arr) => {
 console.log(arr); // [10, 20, 40, 60, 90]
let sum = 0;
 for (let element of arr) {
  sum += element;
 }
 console.log(sum); // 220. 
}
SumElements(10, 20, 40, 60, 90); // Note we are not passing array here. Instead we are passing the elements as arguments. 


Math.max(10, 20, 60, 100, 50, 200); // returns 200.

let arr = [10, 20, 60];
Math.max(arr); // Shows error. Doesn't accept an array.

let arr = [10, 20, 60];
Math.max(...arr); // 60 