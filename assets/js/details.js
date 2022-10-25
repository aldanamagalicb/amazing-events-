const containerDetails = document.getElementById("details_container")

async function infoDetails(){
  try{
    var detailsJson = await (await fetch('https://mh-amazing.herokuapp.com/amazing')).json()
  }catch(notFound){
      console.log(notFound)
  }
  let totalEvents = detailsJson.events
  let idLocation = location.search.slice(4)
  let filteredEvent = totalEvents.find((event) => idLocation == event.id)

  createCardDetails(filteredEvent)
}

infoDetails()



function createCardDetails(event) {
 let dates = new Date(event.date).toDateString();
  if (event.assistance !== undefined) {    
    containerDetails.innerHTML = `
    <article class="card only_card">
    <img src="${event.image}" class="card-img-top card-img2" alt="${event.category}" />
    <div class="card-body d-flex flex-column justify-content-between card-body2">
      <h5 class="card-title2">${event.name}</h5>
      <p class="card-text2">
            Date: ${dates}
            </p>
            <p class="card-text2">
            Place: ${event.place}
            </p>
            <p class="card-text2">
            Category: ${event.category}
            </p>
            <p class="card-text2">
            Category: ${event.capacity}
            </p>
            <p class="card-text2">
            Assistance: ${event.assistance}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">Price $${event.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
  `;

} else {
  containerDetails.innerHTML = `
  <article class="card only_card">
    <img src="${event.image}" class="card-img-top card-img2" alt="${event.category}" />
    <div class="card-body d-flex flex-column justify-content-between card-body2">
      <h5 class="card-title2">${event.name}</h5>
      <p class="card-text2">
            Date: ${dates}
            </p>
            <p class="card-text2">
            Place: ${event.place}
            </p>
            <p class="card-text2">
            Category: ${event.category}
            </p>
            <p class="card-text2">
            Category: ${event.capacity}
            </p>
            <p class="card-text2">
            Estimate: ${event.estimate}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">Price $${event.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
  `;
}
}
