console.clear();
//.Length in js

let arr = [{
    name: 'ghazi',
    age: '17'
    },
    {

        name: 'ghazi',
        age: '17',
    }]
let len = arr.length
console.log(len)
//The forEach() method calls a function once for each array element.
//Using ForEach instead of for loop

let arr2 = ['Hello','World', '20', 'Learning']
let arrlen = arr2.length

let list1 = "<ul>"
arr2.forEach(myfunction);
list1 +="</ul>"

function myfunction(value) {
    list1 += "<li>" + value + "</li>"
}

console.log(list1)
//For loop for looping through an array
let arr1 = ['Hello','World', '20', 'Learning']
let flen = arr1.length

let list = "<ul>";//opening list
for (let i = 0; i<= flen; i++) {
//list iterate on every prop and than close
    list += "<li>" + arr1[i] + "</li>";
}
//closing ullist.
list += "</ul>"

console.log(list);