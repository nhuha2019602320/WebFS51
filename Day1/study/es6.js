//1. arrow function
var number = [1, 2, 3]
//2. destruring
var {firstName, lastName} = Object
//3. Default parameter
function multiply (a, b) {
    var b = typeof b != 'undefined' ? b : 1;
    return a*b;
}

//redux -> khia báo state => phải suer dụng gán giá trị mặc định
function multiply (a, b: number) {
    
}