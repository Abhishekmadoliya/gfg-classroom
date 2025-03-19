
// var property in function 
// // showdowing will not happen funion scope
// var a =10;

// function name() {
//     var a =100;
//     console.log(a);
    
// }

// abc() //100;
// console.log(a); //10;


// function name() {
//     let numb = 3;

// let mid = Math.floor(numb / 2);
// for (let i = 2; i <= mid; i++) {
   
//     if(numb % i === 0){
//         console.log("not prime");
//         break;
        
//     }
//     console.log("prime")
// }
// }

// name();


// function isPrime(n) {
    
//     if (n <= 1)
//       return false;
  
    
//     for (let i = 2; i < n; i++)
//       if (n % i == 0)
//         return false;
  
//     return true;
//   }
  
  
  
// isPrime(11)? console.log("true"): console.log("false");
  

// const isprime  = (n)=>{
//     if (n <= 1)
//         return false;
    
      
//       for (let i = 2; i < n; i++)
//         if (n % i == 0)
//           return false;
    
//       return true;
// }

// isprime(2)



 isPrime = (n) =>{
    if (n <= 1) return false;
    
    let mid = Math.sqrt(n);
    for (let i = 2; i <= mid; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(2))?console.log("prime"):console.log("not prime");
  // true
console.log(isPrime(17));  // true
console.log(isPrime(18));  // false
console.log(isPrime(29));  // true

