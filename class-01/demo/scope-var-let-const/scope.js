//Used to demonstrate scope for var, let, and const.

//var
var a = 1;

// function changeVar() {
//   a = 5;
//   return a;
// }

console.log('before change a = ', a);
// changeVar();
console.log('after change a = ', a);

// let

function changeLet() {
  let a = 10;

  for (let i = 0; i < a; i++) {
    a -= i;
    console.log(a);
    return a;
  }
}

// console.log('outside i = ', i); //will be undefined because of scope
console.log(changeLet());
console.log('outside a = ', a);

// const

const x = 99
let y = 100

console.log(x, y)

// x = y;

console.log(x);


// What happens when I change to const?

// function changeConst() {
//   y -= x;
//   return y;
// }

// console.log('before change y = ', y);
// changeConst();
// console.log('after change y = ', y);

const array = [1, 2, 3]
let newArray = [4, 5, 6]

console.log(array, newArray)

// I can not change the assignment to array
// newArray = array

console.log(array, newArray)


// I can change the contents of the array.
function changeConst2() {

  for (let i = 0; i < newArray.length; i++) {
    array.push(newArray[i]);
  }

  return array;
}

console.log('before change array = ', array);
changeConst2();
console.log('after change array = ', array);
