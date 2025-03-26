// practice questi
// const printname = (name)=>{
    
//     let newname = name.split(" ").reverse().join();
//     return newname;

// }
// let string = "my name is aman"
// console.log(printname(printname(string)));


// let str = 'abcd'

// let newstr = str.split('').reverse().join('');
// const result = str===newstr?"string is palindrome":"not palindrome"

// console.log(result);





// anagram

// function isAnagram(str1, str2) {
   
//     if (str1.length !== str2.length) {
//         return false;
//     }
    
    
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
    
//     return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram('listen', 'silent')); 
// console.log(isAnagram('hello', 'world')); 


// first char of your name 


// const findchar = (myname)=>{
//     const words = myname.split(" ");
//     let newstr =words.map((word)=>{
//         word[0].toUpperCase()
//     })
//     console.log(newstr);
    
//     // return myname.split(" ").words.map((word)=>{
//     //     word[0].toUppercase().join("")
//     // })

    
    
// }
// let myname = "abhishek madoliya"
// console.log("Abhishek Madolia".split(" ").map(item=> item[0].toUpperCase()).join(''))

// let myname = "abhishek "
// console.log("Abhishek".split("").map(item=> item[0].toUpperCase().slice(1).join(''))


let obj = [
    {
        name:"vikas",
        age: 23,

    },
    {
        name:"aman",
        age: 23,
        
    },
    {
        name:"raman",
        age: 23,
        
    },
    {
        name:"shivan",
        age: 23,
        
    }
]

// Convert all characters to uppercase
// console.log(obj.map(({name}) => name.split("").toUpperCase()));
// console.log(obj.map(({name}) => name.charAt(0).toUpperCase()).join(""));
// console.log(obj.map(({name}) => name.charAt(0).toUpperCase() + name.slice(1)));
// console.log(obj.map(({age}) => age.sort((a,b)=> a-b)));

// Sort ages in ascending order
// const sortedAges = [...obj].sort((a, b) => a.age - b.age).map(({age}) => age);
// console.log(sortedAges);

// const sortednames = obj.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortednames);

// const sortedNames = [...obj].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedNames);


// let allhobies = obj.map(({hobbies})=> hobbies.map(i=>console.log(i)))

// console.log(allhobies);



// most occurences in a string

