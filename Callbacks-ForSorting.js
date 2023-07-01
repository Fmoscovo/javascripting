//The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascendingCallbacks-ForSorting

// const array = [10, 2, 5, 1, 9];

function sortfunction(a, b) { //causes an array to be sorted numerically and ascending
  return (a - b);
}


// console.log(array.sort(sortfunction)); //returns [1, 2, 5, 9, 10]


const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

function sortfunction2(a, b) {  
  if (a.name === b.name) {
    return b.age - a.age;
  }if (a.name === b.name) {
    return b.age - a.age;
  }
  return a.name > b.name;
} 



// function sortfunction3(a,b) {
//   if (a.age === b.age) {
//     return b.age - a.age;
//   } 
//   return a.age < b.age;
// }

console.log(students.sort(sortfunction2));

