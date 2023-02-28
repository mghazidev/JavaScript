//  Factory Function to create multiple behavior in one func

// function Circle(radiuss) {
//     return {
//         radiusss: radiuss,
//         OOP: function() {
//             console.log('draw');
//         }
//     };
// }

// const a = Circle(1);
// const b = Circle(2);
// console.log(a)
// console.log(b)

//This whole method eliminate the repetation of the same code.

// Constructor Function

  function Circle(radius) {
    this.radius = radius,
    this.draw= function() {
        console.log('draw');
    }
  }
const another =new Circle(1) //NEW OPERATOR WILL CREATE EMPTY OBJECT THAN SET THIS TO POINT THE OBJECT
console.log(another)