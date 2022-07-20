var students = ["Vamsi", "Taju", "Sadiq", "Sha", "Imran", "Jabir", 100, false];
console.log(students[2]);
console.log(students[5]);
console.log("Length of array is ", students.length);

students = 123; // number
console.log("Length of array is ", students.length);


var students = ["Vamsi", "Taju", "Sadiq", "Sha", "Imran", "Jabir"];
var studentMarks = [80, 90, 100, 70, 80, 100, 80, 90, 100];

// var a = null;

// To string method in Numbers
var marks = 95;
console.log(typeof marks.toString(), typeof (""+marks))

console.log( students)
// console.log(typeof students.toString())

students.pop();
console.log(students)
students.push("Jabir")
students.push("Ameen", "Hamza")
console.log(students)
students.shift();
console.log(students)
students.unshift("Vamsi")
students.unshift("Mohammed", "Umar")
console.log(students)

var states = ["AP", "Telangana"]
var states1 = ["Tamilnadu", "Kerala", "Karnataka", "Kerala"];

var southStates = states.concat(states1);

console.log(southStates.toString());

southStates.splice(2, 1, "Rayachoti", "Kadapa", "T Sundupalli")
console.log(southStates.toString());

const newArr = southStates.slice(3);
console.log(southStates.toString());
console.log(newArr.toString());

console.log(southStates.includes("Delhi"));
console.log(southStates.includes("Kerala"));

const keralaIndex = southStates.indexOf("Kerala");
southStates.splice(keralaIndex, 1);
console.log(southStates);

// console.log(southStates.sort());
console.log(southStates.sort((a, b)=>b.localeCompare(a)));

const numbers = [100, 90, 10, 5, 2, 7];
console.log(numbers.sort(function(a, b) {
    return b-a;
}));
