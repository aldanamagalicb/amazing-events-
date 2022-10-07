const container = document.getElementById("main-content");

for (let event of data.events) {
  getCard(event);
}

function getCard(event) {
  container.innerHTML += `
    <article class="card" style="width: 18rem">
    <img
      src="${event.image}"
      class="card-img-top"
      alt=${event.name}"
    />
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">
      ${event.description}</p>
      <button class="btn btn-info">Price: $${event.price}</button>
      <a href="./pages/onlycard.html" class="btn btn-primary">See more</a>
    </div>
  </article>
  `;
}
