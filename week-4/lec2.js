
let numb = 3;

let mid = Math.floor(numb / 2);
for (let i = 2; i <= mid; i++) {
   
    if(numb % i === 0){
        console.log("not prime");
        break;
        
    }
    console.log("prime")
}


