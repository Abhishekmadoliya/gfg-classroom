// find the most occurence of the chr in str

function mostocc(str){
    let obj = {};

    for (const element of str) {
        if(!obj[element]){
            obj[element] =1;
        }else{
            obj[element] +=1;
        }
    }

    let arr = []
    for(let [key,val] of Object.entries(obj)){
        if(val>1) arr.push(key)
    }
    return arr
}

const str = 'hello world'
console.log(mostocc(str))