//two statements declare & assign
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//single statement declare & assign
var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

//arrayobject
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++;) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

//comma separated 
var names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

//