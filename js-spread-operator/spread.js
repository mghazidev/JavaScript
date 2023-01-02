console.clear();

//Spread operator makes a copy of an array
//It converts an array into multiple arguments

//Array concatination using spread operator
var arr1 = [1,2,3,4,5]

var arr2 = [6,7]

var arr3 = [...arr1,...arr2]
//console.log(arr3)

//Object concatination using spread operatoe

var obj1 = {
    name: "Hello"
}


var obj2 = {
    age: 20
}

var obj3 = {...obj1,...obj2}
//console.log(obj3)

//Another example
let objArr = [
    {
        name: 'World',
        email: 'vscode@gmail.com'
    },
    {
        name: 'World',
        email: 'vscode@gmail.com'
    }
]

const newobjArr = objArr.map (function(obj) {
    return {
        ...obj,//All object prop copy
                //rest operator convert multiple arguments in one array
                // spread operator kisi bhi array ki value ko multiple arguments me convert kardeta hai 
        name: 'Hello ' + obj.name,
    };
})
//console.log(objArr, newobjArr)