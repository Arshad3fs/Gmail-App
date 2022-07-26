// Issues with large set of else if blocks
var age = 100;

if(age < 1){
    console.log("Toddler");
} else if(age < 5) {
    console.log("Kid");
} else if(age < 18 ) {
    console.log("Minor");
} else if(age < 30) {
    console.log("Young")
} else if( age < 40 ) {
    console.log("Getting Old");
} else if(age < 60) {
    console.log("Senior citizen")
} else if(age < 80 ) {
    console.log("Too old")
} else {
    console.log("No more");
}

