// variables created using var are having global or function scope
// Voter ID allotment system

console.log(age)

function validateAge() {

}

let age = 20;

var applicant = {
    firstName: 'Imran',
    age: 15,
    documentsProvided: ['birth-centificate', 'aadhar'],
    address: {
        line1: 'Sundupalli',
        district: 'Rayachoti',
        state: 'AP'
    }
}

console.log(applicant);

valdateAddress()

function valdateAddress() {
    var local = 'validateAdress'
    // var k = 20;
    console.log(local, applicant);
    for(var i=0; i<5; i++){
        console.log(i)
        let k = 200;
    }

    // var j = k;
    // console.log(j)
}

// console.log(local)

