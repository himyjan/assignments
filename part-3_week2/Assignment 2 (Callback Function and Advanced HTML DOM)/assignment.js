/* Assignment 2: Callback Function and Advanced HTML DOM
Complete the functions below to make an AJAX call to a URL by GET method, and show the response data in the page. You may render UI with any style. */
const cardContainer = document.querySelector(".card-container");

function ajax(src, callback) {
  fetch(src)
    .then((response) => response.json())
    .then((data) => callback(data));
}

function render(data) {
  cardContainer.innerHTML = data
    .map(
      (card) => `
      <div class="card">
        <div class="card-body">
          <h1 class="item-name">${card.name}</h1>
          <p class="item-description">${card.description}</p>
        </div>
        <div class="card-footer">
          <button class="item-button">${card.price}</button>
        </div>
      </div>
  `
    )
    .join("");
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
