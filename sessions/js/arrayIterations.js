const employees = ["Imran", "Shahinsha", "Jabir", "Khadar", "Taju", "Habeeb"];

/**
 * For loop
 * 3 blocks in for loop
 * 1. Initialisation
 * 2. Condition
 * 3. Increment/Decrement
 * Seperator is a ;
 */

for(var i = 0; i < employees.length; i++) {    
    console.log(employees[i]);   
}
console.log('done ********************************')
for(var i=employees.length-1; i >= 0; i--){
    console.log(employees[i])
}

for(var i=0; i == 0; i++){
    console.log("loooooop", i)
}

// employees = ["Irfan"]; - This will produce an error

employees[0] = "SMD Imran";
employees.push("Arshad");
console.log(employees.toString())


// Objects with Const
const laptop = {
    manufactorer: "ASUS",
    color: "black",
    ram: "16GB",
    screenSize: 15.6,
    // ...
};

// laptop = {
//     color: "grey",
//     ram: "32GB"
// };

laptop.batteryBackup = 2;

console.log(JSON.stringify(laptop));

// Redeclaration of Variable

var laptops = ["Asus", "HP", "Dell", "MAC"];
console.log(JSON.stringify(laptops));
var laptops = [ "Asus" ];
console.log(JSON.stringify(laptops));

// let bikes = ["Honda", "Pulser", "TVS"];
// console.log(JSON.stringify(bikes));
// let bikes = [ "HD" ];
// console.log(JSON.stringify(laptops));