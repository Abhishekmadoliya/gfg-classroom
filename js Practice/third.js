
// prime number or not :  to check whether a number is prime or not
    


let num = 2;

// if(num <= 1){
//     console.log("Not a prime number");
// }
for(let i = 2; i <= 100; i++) {
    if( i == num ) {
        continue;
    }
    if(num % i == 0) {
        console.log("Not a prime number");
        break;
    } else {
        console.log("Prime number");
        break;
    }
}
    



























