/* Assignment 2: Callback Function and Advanced HTML DOM
Complete the functions below to make an AJAX call to a URL by GET method, and show the response data in the page. You may render UI with any style. */

function ajax(url) {
  return fetch(url).then((response) => response.json());
}

function render(data) {
  document.querySelector(".card-container").innerHTML = data
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

ajax("https://appworks-school.github.io/Remote-Assignment-Data/products").then(
  (data) => render(data)
);
