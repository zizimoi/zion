let a = 10;
let b = 5;
let result = a + b;
console.log(result); // 15

let x = 12;
let y = 4;
console.log(x - y); // 8

let price = 50;
let quantity = 3;
console.log(price * quantity); // 150

let total = 100;
let people = 4;
console.log(total / people); // 25

console.log(10 % 3); 
console.log(12 % 4);

console.log(2 ** 3);
console.log(5 ** 2);
console.log(9 ** 0.5);

console.log("logical operators");
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") 
    {
    console.log("login succesful");
}

else{
    console.log("invalid username or password");
    
}


let age = 16;

if (age >= 18) {
  console.log("Welcome! You are old enough.");
} else {
  console.log("Sorry, you must be at least 18.");
}


let hasPermission = false;

if (age >= 18 || hasPermission) {
  console.log("✅ Access granted");
} else {
  console.log("🚫 Access denied");
}

let isStudent = false;
let isSenior = true;

if (isStudent || isSenior) {
  console.log("🎉 You get a discount!");
} else {
  console.log("❌ No discount available.");
}

let isSystemOn = true;
let baterry = "60";

if ( isSystemOn && baterry  > 40 )
    {
   console.log("system is fine for use");
}
else{
    console.log("low baterry please charge");
}

let final = 100;
final /= 2;   // same as total = total + 50
console.log(final); // 150

