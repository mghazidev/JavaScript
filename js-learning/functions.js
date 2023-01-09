//normal function

let party = function(name)  {
    return `Happy Birthday ${name}`;
}
console.log(party("You"))


//Arrow Function 

var party1 = (name,age) => {
    return `Happy Birthday to ${name} - ${age}`
}

console.log(party1('You','20'));

//We can also do one line code if not complex
var party1 = (values) => `Happy Birthday to ${values}`;


console.log(party1('You'))


//Funtion /rest

function sum(bike, ...args) {
    let sum = 0;
    for (let a in args) {
        sum+= args[a];
    }
    console.log(`${bike} : `,sum);
}

sum("Kawasaki",10,10);


//map function

var a =  [10,110,20,90]

var b = a.map(function(test){
    return test * 10;
})

console.log(b);

//similarly we can us it in object array function