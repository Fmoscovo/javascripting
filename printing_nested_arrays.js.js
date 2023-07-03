//We will be building a function that takes in an array as its input and prints out all the items in that array individually. 

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];


const printItems2 = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems2(item);
    
    } else {
      console.log(item);
    }
  }
};


printItems2(array);