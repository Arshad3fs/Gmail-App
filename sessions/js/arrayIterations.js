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
