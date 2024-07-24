let pokeInput = document.getElementById('pokemon-input');
let btn = document.getElementById('search-button');
let pokePic = document.getElementById('pokemon-img');
let pokeName = document.getElementById('pokemon-name');
let pokeDescription = document.getElementById('pokemon-description');
let pokeSound = document.getElementById('audio');
let pokeInfo = document.getElementById('available-pokemon');
let pokeInfoButton = document.getElementById('toggle-list-button');
let pokeHideInfoButton = document.getElementById('toggle-list-buttons');
const requestOptions = {
    method: "GET",
    redirect: "follow"
};
pokeInfoButton.addEventListener('click', () => {
    pokeInfo.style.display = "block";
})

pokeHideInfoButton.addEventListener('click', () => {
    pokeInfo.style.display = "none";
})

btn.addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeInput.value.toLowerCase() + "/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            pokeName.style.display = "block";
            pokePic.style.display = "block";
            pokeDescription.style.display = "block";
            pokeSound.style.display = "block";
            pokeName.innerText = result.name.charAt(0).toUpperCase() + result.name.slice(1);
            pokePic.src = result.sprites.front_default;
            pokeDescription.innerText = `${result.name.charAt(0).toUpperCase() + result.name.slice(1)} is a ${result.types[0].type.name} type pokemon that weighs ${result.weight} Kgs.
            It has ${result.moves.length} moves and attacks it can learn.
            It has ${result.forms.length} evolutions and
            it has a base experience of ${result.base_experience}. `
            pokeSound.src = result.cries.latest;


            console.log(result)
        })
        .catch((error) => {
            console.error(error);
            pokeName.style.display = "none";
            pokePic.style.display = "none";
            pokeSound.style.display = "none";
            pokeDescription.style.display = "block";
            pokeDescription.innerText = "There is no such pokemon please enter a correct name";
        });
})

