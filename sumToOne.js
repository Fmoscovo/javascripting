// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumToOne(4));


function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));

/*

function countEvenToTwelve(number) {
  if (number <= 12) { // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
    countEvenToTwelve(number + 2);
  }
  // Base case, do nothing when number > 12
};
countEvenToTwelve(0);

*/