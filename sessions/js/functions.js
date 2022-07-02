function myFunction() {
    var a = 20;
    var b = 40;
    console.log(b-a)
}

myFunction();

function multiply(a, b) {
    var localVariable = "Local";
    console.log("Multiply ",a, b, a*b);
    return a*b;
}

var result = multiply(11111, 11111);
console.log(result);
console.log(multiply(2, 2));
console.log(multiply(20, "20", 8908098098098098098098));
console.log(multiply(200000)); //  

console.log(multiply()); //  
// localVariable = "Test";
// console.log(localVariable);

// if(true){
//     var dummyVar = "Dummy";
// }

// console.log(dummyVar)

// Java
// public void javaFunction(int a, int b){
//     return a * b;
// }

// javaFunction(12, 80980); // Valid
// javaFunction(12, "String"); // Error
// javaFunction(12); // Error
// javaFunction(1, 12, 12, 080980); // Error