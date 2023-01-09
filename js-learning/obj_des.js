///ARRAY DESTRUCTURING///
console.clear();

function user([name, age, city]) {
   console.log(name, age, city);
}

user(['Hello', 20, 'Karachi'])

//using rest operator

let user1 = ['Hello', 20, 'Karachi'];

let [name1, ...args] = user1; 
console.log(name1);
console.log(args);


function user2() {
    return ['Hello', 22 , 'Karachi']; 
}
let [name2,age2,city2] = user2();
console.log(name2);

///OBJECT DESTRUCTURING


let obj5 = {
    name5: 'Hello',
    age5: 25,
    city5: 'Karachi' 
}

let {name5 : n ,age5: a ,city5: c } = obj5;
console.log(n,a,c);