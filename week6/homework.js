// // find the most occurence of the chr in str

// function mostocc(str){
//     let obj = {};

//     for (const element of str) {
//         if(!obj[element]){
//             obj[element] =1;
//         }else{
//             obj[element] +=1;
//         }
//     }

//     let arr = []
//     for(let [key,val] of Object.entries(obj)){
//         if(val>1) arr.push(key)
//     }
//     return arr
// }

// const str = 'hello world'
// console.log(mostocc(str))


const obj = [{
    name:'aman',
    age:12,
    isStudent:true,
    hobbies:['a','b','c']
},
{
    name:'raman',
    age:10,
    isStudent:false,
    hobbies : ['d','e','f']
},
{
    name:'vikas',
    age:120,
    isStudent:true,
    hobbies: ['e','w','q']
},
{
    name:'shivam',
    age:20,
    isStudent:false,
    hobbies: ['t','y','u']
},
{
    name:'saurabh',
    age:35,
    isStudent:true,
    hobbies: ['z','e','g']
},]
// find all with age >16
// console.log(obj.filter((i) => i.age > 16));

// sum of all age values
// console.log(obj.reduce((acc, curr) => acc + curr.age, 0));


