import { countries, search, reset } from "./countries.js";

const searchInput = document.querySelector("#search");
const cardsDiv = document.getElementById("cards");

searchInput.addEventListener("keydown", (event) => {
  reset();
  cardsDiv.innerHTML = "";
  search(event.target.value.trim());
  createCardList();
});

export const createCard = (country) => {
  const card = document.createElement("div");
  card.className = "card shadow-lg m-2 col-md-3 col-sm-12";

  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top mt-2 border-rounded";
  cardImg.src = country.flags.png;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = country.name.common;

  const population = document.createElement("p");
  population.className = "card-text";
  population.textContent = `Population: ${country.population.toLocaleString()}`;

  const capital = document.createElement("p");
  capital.className = "card-text";
  capital.textContent = `Capital: ${country.capital[0]}`;

  const region = document.createElement("p");
  region.className = "card-text";
  region.textContent = `Region: ${country.region}`;

  const UN = document.createElement("p");
  UN.className = "card-text";
  UN.textContent = `UN member: ${country.unMember}`;

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer d-flex justify-content-center mb-2";

  const heart = document.createElement("i");
  heart.className = "bi bi-heart";
  const heartKey = `heartState-${country.name.common}`;


  const savedHeartState = localStorage.getItem(heartKey);
  if (savedHeartState === 'filled') {
    heart.className = "bi bi-heart-fill";
  }


  const toggleHeart = () => {
    if (heart.className === "bi bi-heart") {
      heart.className = "bi bi-heart-fill";
      localStorage.setItem(heartKey, 'filled');
    } else {
      heart.className = "bi bi-heart";
      localStorage.setItem(heartKey, 'empty');
    }
  };

  heart.addEventListener("click", toggleHeart);

  card.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(capital);
  cardBody.appendChild(population);
  cardBody.appendChild(region);
  cardBody.appendChild(UN);
  cardFooter.appendChild(heart);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  cardsDiv.appendChild(card);
};

export const createCardList = () => {
  for (const country of countries) {
    createCard(country);
  }
};


document.addEventListener('DOMContentLoaded', createCardList);
