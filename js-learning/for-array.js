//Practice 1

const arr = ['Hello','Karachi','Pakistan']

let res = "<ul>";
arr.forEach(element => {
    res += "<li>" + element + "</li>" +"\n";
})
res += "</ul>"

console.log(res)

//Practice 2

const arr2 = [1,2,3,4];
let sqr = []
arr2.forEach(value => {
      sqr.push(value * value);
})
console.log(sqr);

//Practice 3 

const arr3 = ['Hello','Lahore']

let result = []

arr3.forEach(element => {
    result.push(element.length);
})
console.log(result);

//Practice 4

const arr4 = [{
    name: 'Araham',
    age: '1'
}]
let a = []
arr4.forEach(element => {
    a.push(element.name + ' is ' + element.age +' year old ');
})
console.log(a)

//Practice 5 

const arr5 = [1,2,3,4]
let re = 0
arr5.forEach(value => {
   re += value ;
})

console.log(re);

