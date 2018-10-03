// example 1
var str: string = "Hello, World.";
console.log('str = '+ str);

//str = 2;

// example 2
var x: number = 2;
console.log('x = ' + x);

//x = "hello";

// example 3
var checked: boolean = false;
console.log('checked = '+ checked);
//checked = "true";

// example 4
var list: number[] = [1, 2, 3];
list.push(4);
//list.push("5");
console.log('list = ' + list);

// example 5
function returnsNada(): void {
    //return 1;
}

// example 6 change any return type of function to string|number would cause compile time issue
function returnsWhatever(): any {
    if (Math.random() < 0.5) {
        return "1";
    }
    return 1;
}

var result = returnsWhatever();
console.log('result = '+ result);

// exampl 7
function add(msg: string, x: number, y: number): void {
    console.log(msg + (x + y));
}

add('typed parameters (msg: string, x: number, y: number) = ', 3, 2);
