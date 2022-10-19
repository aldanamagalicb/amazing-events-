// Obtenemos el id de los elementos de las cards para luego crearlas dentro del contenedor 
const container = document.getElementById("main-content");
//Obtengo el título de cada pagina(home, pastE y upcomingE) para que las cards se filtren de acuerdo a donde pertenezcan
const title = document.getElementById("tittle");



// Obtiene la data del currentDate
const date = data.currentDate;

//Creamos un nuevo array (card) a través del map
const card = [...data.events].map((event) => event);


const indexCards = card.filter(() => title.text.includes("Home"));
const upcomingCards = card.filter(() => title.text.includes("Upcoming"))
  .filter((card) => card.date > date);
const pastCards = card.filter(() => title.text.includes("Past"))
  .filter((card) => card.date < date);

let cardsFucionadas = [...indexCards, ...upcomingCards, ...pastCards];
cardsFucionadas.forEach(getCard);

//Filtro de categorias checkbox y maping search

//Obtenemos el id de los contenedores de checkbox y search
const inputSearch = document.getElementById("cont_search");
const containerCheckbox = document.getElementById("container_check");


//Nombro los checkbox: aplico reduce al card(que es el array que creé con map anteriormente) para obtener el valor del key (category) que deseo por cada interacion (event), para reunirlas en un nuevo array (allCategorys). Otra opcion tambien pudo haber sido map
const categorys = card.reduce ((allCategorys, data)=> Array.from(new Set([...allCategorys, data.category])), []);

//Pongo el cajoncito de check
categorys.forEach(container_check)

function container_check(category){
  containerCheckbox.innerHTML += `
  <div class="form-check form-check-inline">
          <input 
            class="form-check-input categoryCheckbox"
            type="checkbox"
            id="${category}"
            value="${category}"
          />
          <label class="form-check-label" for="inlineCheckbox1">"${category}"
          </label>
               </div>
               `;
}

//Llamo al id donde se encuentra el input del checkbox (en la funcion definida en la linea 34)
let categoryCheckbox = document.querySelectorAll(".categoryCheckbox")

//El query selector nos devuelve un nodo, entonces hay que convertirlo en array
categoryCheckbox = Array.from(categoryCheckbox)

//Genero un event "click" para que en cada click realice la funcion en la linea 59
categoryCheckbox.forEach(check => check.addEventListener("click" , checks))
inputSearch.addEventListener("input", checks)

function checks(){

  let filterCheck = checkEvents(cardsFucionadas)
  let filteredSearch = filteringCardsForSearch(filterCheck, inputSearch.value)
 
  if (filteredSearch.length !== 0){
    container.innerHTML = ``
  } 
  filteredSearch.forEach(getCard)
}

function checkEvents(array){  
  let checkboxChecked = categoryCheckbox.filter(check => check.checked).map(checkedCategory => checkedCategory.value)
  if (checkboxChecked.length > 0){
    let filteredCheckBox = array.filter (events => checkboxChecked.includes(events.category))
    return filteredCheckBox
  }
  return array
}

function filteringCardsForSearch(array, textoDeBusquedaDelUsuario){
  let cartasFiltradas = array.filter(data => data.name.toLowerCase().includes(textoDeBusquedaDelUsuario.toLowerCase()));
  if(cartasFiltradas.length === 0){
    searchNull()
    return []
  }
  return cartasFiltradas
}

//Creo una funcion en donde en c
function searchNull() {
  container.innerHTML = `
  <article class="d-flex flex-column align-items-center">
  <img src="https://media0.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=790b7611bc6e4f87c037aea77327ef73fdff1112b5f6161f&rid=giphy.gif&ct=g" alt="error" class="gif img-fluid " width="187px"</img>
  <h4 class="text-center">Sorry, your search is not available.</h4>
  </article>
  `;
}


  // CARDS

function getCard(event) {
  container.innerHTML += `
  <article class="card">
  <img src="${event.image}" class="card-img-top img-card" alt="${event.name}">
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p>U$D ${event.price}</p>
      <a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">More details</a>
    </div>
  </div>
  </article>
  `;
}
