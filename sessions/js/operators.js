// != oprator
var a = "abc";
var b = "bcd";
if(a != b){
    console.log(" A and B are not equal")
}

const registeredUsers = [
    "Sha@gmail.com",
    "Jabir@gmail.com",
    "Imran@gmail.com",
    "Arshad@gmail.com"
];

const email = "Tajuba@gmail.com";

// Register
registeredUsers.forEach(user => {
    if(user === email){
        console.log( `${user} is already registered with ${email}`);
    }
});

// Signin
registeredUsers.forEach(user => {
    if(user !== email){ // true
        console.log( `${email} is not registered with us, Please Signup.`);
    }
});

// Less than & greater than comparison
var c = 100;
var d = 10;
if(c > d) console.log('C > D True');
// 100 > 10 - True

if(d < c) console.log(`${d} < ${c} True`);
// 10 < 100 - True

var e = 100;
var d = 100;
if(e > d) console.log('True');
if(e >= d) console.log(`${e} >= ${d} - True`)
if(e <= d) console.log(`${e} <= ${d} - True`)

// User age should be greater than 18 years
// User age should be less than 60 years
var userAge = 55;
if (userAge > 18 || userAge < 60) {
    console.log("DL can be given")
} else {
    console.log("DL should not be given");
}

// Logical Or
// F || F = False
// T || F = True
// F || T = True
// T || T = True

// Logical And
// F && F = False
// T && F = Flase
// F && T = False
// T && T = True