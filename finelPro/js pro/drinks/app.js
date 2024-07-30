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
                infococktails.innerText = `The three main ingredients is 1: ${drink.strIngredient1}, 2: ${drink.strIngredient2}, 3: ${drink.strIngredient3}. The description of ${drink.strDrink.charAt(0).toUpperCase() + drink.strDrink.slice(1)} is ${drink.strInstructions}`;
                p.style.display = "block"
                console.log(drink);
            } else {
                theResultsDiv.style.display = "none";
                img.style.display = "none";
                messegeError.innerText = "we don't found this cocktail"
                messegeError.style.color = "black"
                setTimeout(() => {
                    document.location.reload()
                }, 2000)

            }

        })
        .catch((error) => {
            // טיפול בשגיאות
            console.error(error);
            theResultsDiv.style.display = "none";
            img.style.display = "none";
            infococktails.style.display = "block";
            infococktails.innerText = "An error occurred";
        });
});
