// Old Syntax
function oldOne() {
    console.log("Hello World..!");
}
// New Syntax
var newOne = () => {
    console.log("Hello World..!");
}

let NewOneWithParameters = (a, b) => {
    console.log(a + b); // 30
}
NewOneWithParameters(10, 20);