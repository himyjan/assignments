/* Assignment 3: Function, Array, and Object
Complete the function below to calculate the total price of all products after applying a discount. */

function calculate(data) {
  // your code here
  let totalPrice = 0;
  for (let i = 0; i < data.products.length; i++) {
    totalPrice += data.products[i].price;
  }
  return totalPrice * data.discount;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log("Assignment 3: Function, Array, and Object");
console.log(discountedPrice); // show the total price of all products after applying a discount
