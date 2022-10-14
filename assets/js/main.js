const container = document.getElementById("main-content");

const title = document.getElementById("tittle");

const date = data.currentDate



const card = [...data.events].map(event => event)


const indexCards = card.filter(() => title.text.includes("Home")).forEach(getCard)

const upcomingCards = card.filter(() => title.text.includes("Upcoming")).filter((card) => card.date > date).forEach(getCard)

const pastCards = card.filter(() => title.text.includes("Past")).filter((card) => card.date < date).forEach(getCard)



function getCard(event) {
  container.innerHTML += `
  <article class="card">
  <img src="${event.image}" class="card-img-top" alt="${event.name}">
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p>Price: $$${event.price}</p>
      <a href="../paginas/details.html" class="btn btn-primary">More details</a>
    </div>
  </div>
  </article>
  `;
}
