const text = "Javascript is crazy programming language Javascript";

console.log(text.toLowerCase())
console.log(text.toUpperCase())
console.log(text.split("s"))
console.log(text.includes("xyz"))
console.log(text.length)
console.log(text[0], text[5]);
console.log(text.concat(". JS is dynamically typed PL."))

const name = "Patan Arshad Khan";

console.log(name.startsWith("Patan"));
console.log(name.endsWith("Khan"));

console.log(text.lastIndexOf("Javascript"));
console.log(text.replace("Javascript", "JS"));
console.log(text.replaceAll("Javascript", "JS"));

const str = 'Mozilla';

console.log(str.substring(1, 3));

const password = "        A B      C                ";
console.log(password.length, password.trim().length)
console.log(password)
console.log(password.trim())