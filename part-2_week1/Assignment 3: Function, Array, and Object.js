/* Assignment 3: Function, Array, and Object
Complete the function below to calculate the total price of all products after applying a discount. */

function calculate(data) {
  // your code here
  let total_price = 0;
  for (let i = 0; i < data.products.length; i++) {
    total_price += data.products[i].price;
  }
  return total_price * data.discount;
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
