console.clear();

//Arrays//
//indexing//
const fruits = ["Apples", "Oranges","Bananas","Mango"]
let fruit = fruits[2]
//console.log(fruit);



//Splice take 2 values in an array to remove them between different indexes//
const food = ["Banana", "Orange", "Apple", "Kiwi"];
food.splice(1, 2);
//console.log(food);


//.map makes a new arr and perform operation on elements

let arr = [10,20,30]

let a = arr.map(function(element)   {
    //console.log(element)
    return element +1
})
//console.log(a)

// arr.map takes three arguments (value, index, array)
// Object and Array with map method





//Array filter() Method
//If we use map here it will give boolean output thats why we use filter so it will give number
//map(), .filter() methods does not effects the original arrays they create new arrays and perform operation

let arr2 = [10,20,30,3,2,4,15]

let a2 = arr2.filter(function(value)   {
    return value < 10
})
//console.log(a2)


// Array reduce method
// Reduce() method is a method that reduce the array to a single value
let arr3 = [1,2,3,5,2,1,1]
const reduce_func = function(a,b) {
    return a + b
}

let newarr3 = arr3.reduce(reduce_func) 
console.log(newarr3)


//Practice Questions
// TTake a number from user and push it on an arr
//note : prompt does not run in node 

let array = [1,2,3,4,5,6]
let res = prompt("Enter a number")
res = Number.parseInt(res)
array.push(res)
console.log(array)

//Keep adding number in an array until 0 comes

let array1 = [1, 2, 3, 4, 5, 6]
do {
  //var res1 = prompt("Enter a number")
  res1 = Number.parseInt(res1)
  array1.push(res1)
}
while (res1 != 0);
//console.log(array1)

// return an arr which is divisible by 10

let arr4 = [10,10,3,4,5,6,60,250]

var a4 = arr4.filter(function(value) {
    return value % 10 == 0
})
console.log(a4)

// Sqaure of an array


let arr5 = [10, 10, 3, 4, 5, 6, 60, 250]

var a5 = arr5.map(function(value) {
  return value * value
})
//console.log(a5)


//Factorial of an array

let arr6 = [1,2,3,4]

var a6 = arr6.reduce(function(a,b) {
  return a * b
})
console.log(a6)
