// --Nested_Object


const item = {
    fname: "Anony",
    last: {
      lname: "mous",
      address: {
        city: 'munich',
        country: "Germany"
      }
    }
  }
//   console.log(item.fname+item.last.lname+ ' ' +item.last.address.city+' '+item.last.address.country)


console.clear();
var   a = 1; // es5  
let   b = 2; // changable - mutable
const c = 3; // constant - can't be change


let user = {
  name: 'Ghazi',
  age: 12,
  'email-address': 'abc@gmail.com',
}


let userArr = [
  { 
    name: 'Ghazi',
    age: 12
  },
  {
    name:' raza',
    age:23
  }
]


// Array method - Map, filter, reduce, sort, push, pop
const newUserArr = userArr.map(function(user) {
    return {
        ...user, // spread operator - object ki sari properties copy krdo
        name: 'Mr. ' + user.name,
        isAdult: user.age >= 18,
    };
})
const filteredArr = userArr.filter(function(user) {
    return user.age >= 18
})
console.log({userArr, newUserArr})


function getUserProperty(userObj, prop) { // parameter
  return userObj[prop]
}

const result = getUserProperty(userArr[0], 'age'); 
// console.log(result)


  
/**
 * Array
 * Object
 * Spread operator
 * Function
 * Map - Array method
 * Filter 
 * Reduce 
 * object destructuring
 * Array destructuring
 * function advance
 */