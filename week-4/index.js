

console.log("hello world");

let a = 10;
let b = 20;

let sum = a + b;

console.log(isNaN(a));
console.log(isNaN(sum));

console.log('33'+3    );
console.log(33+'3'    );
// console.log(33+3      );

console.log(33-'3'    );
console.log('33'-3    );
console.log('33'-'3'  );

// type corosion : js will try to convert the type of the variable to match the other variable type
// if it can't convert it will return NaN
let x =10;
let y = '10';
console.log(x!=y);
console.log(x!==y);
console.log(x==y);
console.log(x===y);

// logical operators

let z = true;
console.log(z && true);
console.log(z && false);
console.log(z || true);
console.log(z || false);

// // bitwise operators
// console.log(5 & 1);
// console.log(5 | 1);

// conditional operators
// let age = 18;
// let canVote = age >= 18 ? "yes" : "no";
// console.log(canVote);

// if (age >= 18) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// increment operator
// let i = 0;
// i++;

// nested condition - if 
if (canVote) {
    console.log("Voting is allowed");
    let age = 18;
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }
} else {    
    console.log("Voting is not allowed");
}




// homework : if triagle is equalatral and isocalte  and 

// let a = 10;
// let b = 20;
// let c = 30;

// if (a == b && b == c) {
//     console.log("Equilateral");
// } else if (a == b || b == c || a == c) {
//     console.log("Isosceles");
// } else {
//     console.log("Scalene");
// }