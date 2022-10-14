const container = document.getElementById("main-content");

for (let event of data.events) {
  getCard(event);
}

function getCard(event) {
  container.innerHTML += `
  <article class="card">
  <img src="${event.image}" class="card-img-top" alt="${event.name}">
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p>Price: $${event.price}</p>
      <a href="./paginas/details.html" class="btn btn-primary">More details</a>
    </div>
  </div>
  </article>
  `;
}
