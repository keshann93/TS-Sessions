// simple tuple
var mytuple = [10,"Hello"]; //create a  tuple 
console.log(mytuple[0]) 
console.log(mytuple[1])

// empty tuple
var tup = [] 
tup[0] = 12 
tup[1] = 23 

console.log(tup[0]) 
console.log(tup[1])

// operations
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple.length)

// updating tuple 
var mytuple = [10,"Hello","World","typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 "+mytuple[0]) 

//update a tuple element 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])

//destructing tuple 
var a =[10,"hello"] 
var [b,c] = a 
console.log( b )    
console.log( c )