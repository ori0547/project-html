const requestOptions = {
    method: "GET",
    redirect: "follow"
};

let inputText = document.getElementById("search-input");
let theResultsDiv = document.getElementById('results');
let img = document.getElementById("cocktail-img");
let infococktails = document.getElementById("cocktail-details");
let p = document.getElementById("p");
let messegeError = document.getElementById("h1")
let cocktailName = document.getElementById("cocktail-name");
let btn = document.getElementById('search-button');

btn.addEventListener('click', () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputText.value.toLowerCase(), requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if (result.drinks && result.drinks.length > 0 && inputText.value) {
                theResultsDiv.style.display = "block";
                img.style.display = "block";
                infococktails.style.display = "block";
                cocktailName.innerText = result.drinks[0].strDrink;
                const drink = result.drinks[0];
                img.src = drink.strDrinkThumb;
                if (drink.strIngredient3 === null) {
                    infococktails.innerText = `The main ingredients are: ${drink.strIngredient1},  ${drink.strIngredient2}. The preparation method of ${drink.strDrink.charAt(0).toUpperCase() + drink.strDrink.slice(1)} is to ${drink.strInstructions}`;
                } else {
                    infococktails.innerText = `The main ingredients are: ${drink.strIngredient1},  ${drink.strIngredient2},  ${drink.strIngredient3}. The preparation method of ${drink.strDrink.charAt(0).toUpperCase() + drink.strDrink.slice(1)} is to ${drink.strInstructions}`;
                }

                p.style.display = "block"
                console.log(drink);
            } else {
                theResultsDiv.style.display = "none";
                img.style.display = "none";
                messegeError.innerText = "We didnt find this cocktail"
                messegeError.style.color = "black"
                setTimeout(() => {
                    document.location.reload()
                }, 3000)

            }

        })
        .catch((error) => {
            console.error(error);
            theResultsDiv.style.display = "none";
            img.style.display = "none";
            infococktails.style.display = "block";
            infococktails.innerText = "An error occurred";
        });
});
