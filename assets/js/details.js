//1) Obtenemos el contenedor de la card desde el HTML
const containerDetails = document.getElementById("details_container");

//2)Obtenemos los eventos del data
let eventsFull = data.events

//3)Obtenemos el ID de location
let idLocation = location.search.slice(4)

//4)Filtramos el array (events) para que nos devuelva 1 solo evento que coincida con el ID obtenido por el location
let filteredEvent = eventsFull.filter(event => idLocation == event._id)
filteredEvent = filteredEvent[0]

//5)Imprimimos el evento mediante una funcion
createCardDetails(filteredEvent)

//6) Creamos una funcion para obtener la informacion de la card
function createCardDetails(event) {
    containerDetails.innerHTML = `
    <article class="card only_card">
    <img src="${event.image}" class="card-img-top card-img2" alt="${event.category}" />
    <div class="card-body d-flex flex-column justify-content-between card-body2">
      <h5 class="card-title2">${event.name}</h5>
      <p class="card-text2">
      ${event.description}
      </p>
      <div class="buttons-cardsx">
        <button class="btn btn-dark">Price $${event.price}</button>
        <a href="#" class="btn btn-danger">Buy</a>
      </div>
    </div>
  </article>
  `;
}
