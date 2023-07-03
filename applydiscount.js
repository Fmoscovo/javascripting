function applySeniorDiscount(age) {
  if (age >= 65) {
    return "You get 20% off!";

  } else {
    return "You are not eligible for a discount";
  }
};

const discount = applySeniorDiscount(66);
console.log(discount);


