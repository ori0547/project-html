const requestOptions = {
    method: "GET",
    redirect: "follow"
};
let currentCity = document.getElementById('city-name');
let temp = document.getElementById('temperature');
let descrip = document.getElementById('description');
let image = document.getElementById('img');
let time = document.getElementById('timeZone');
let hum = document.getElementById('humidity');
let wind = document.getElementById('wind-speed');
let city = document.getElementById('city-input');
let btn = document.getElementById('search-button').addEventListener('click', () => {
    fetch("https://api.weatherapi.com/v1/current.json?key=005427c0931445a088d152808242207&q=" + city.value + "&aqi=no", requestOptions)
        .then((response) => {
            if (!response.ok || !city.value) {
                alert(`City not found: try agin`);
                city.value = " ";
                location.reload()
            }
            return response.json();
        })
        .then((result) => {
            currentCity.innerText = result.location.name + ", " + result.location.country;
            time.innerText = "Local Time: " + result.location.localtime.slice(10);
            temp.innerText = "Temperature: " + result.current.temp_c + 'C';
            descrip.innerHTML = `Description: ${result.current.condition.text} `;
            image.style.display = "block"
            image.src = "http:" + result.current.condition.icon;
            hum.innerText = "Humidity: " + result.current.humidity;
            wind.innerText = "Wind Speed: " + result.current.wind_kph + " KPH"
            console.log(result);
        })

        .catch((error) => console.error(error));
})
