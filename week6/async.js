

// async js 

// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(()=> console.log(4),3000)
// console.log(5);
// setTimeout(()=> console.log(6),2000)


// promise

// const promise = new Promise((res,rej)=>{
//     let a =10;
//     if(a===10){
//         res("resolve")
//     }else{
//         rej("reject")
//     }
// })

// // console.log(promise);
// promise.then((res)=> console.log(res)).catch((rej)=>console.log((rej)));





// fectch api using promises

// let promise = new  Promise((resolve,rej)=>{
//     fetch("https://jhttps://jsonplaceholder.typicode.com/posts").then((res)=>{
//         resolve(res.json)
//     }
//     ).catch((err)=> rej(err));
    
// })

// promise.then((res)=>console.log(res)).catch((err)=>console.log(err))


async function demo() {
    return "Hello";
  }
  
  const result = demo();
  console.log(result); // Output: Promise { 'Hello' }
  
  result.then((data) => console.log(data)); // Output: Hello
  


  