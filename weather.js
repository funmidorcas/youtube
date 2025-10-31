// weather app
const weatherForm = document.querySelector('.weatherForm')
const cityInput = document.querySelector('.cityInput')
const card = document.querySelector('.card')
// const cityDisplay = document.querySelector('.cityDisplay')
// const tempDisplay = document.querySelector('.tempDisplay')
// const humidityDisplay = document.querySelector('.humidityDisplay')
// const descDisplay = document.querySelector('.descDisplay')
// const weatherEmoji = document.querySelector('.weatherEmoji')
// const errorDisplay = document.querySelector('.errorDisplay')
const apiKey = 'ef004c7c2ceb5745edcc171132ec6303'


weatherForm.addEventListener("submit", async event =>{
    event.preventDefault()
    const city = cityInput.value 
    if(city){
      try{
const weatherData = await getWeatherData(city)
displayWeatherInfo(weatherData)
      }
      catch(error){
console.error(error)
displayError(error)
      }
    }
    else{
        displayError("Please enter a city")
    }
})

async function getWeatherData(city) {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   const  response = await fetch(apiUrl)
   console.log(response)

   if(!response.ok){
    throw new Error ("Could not fetch weather data")
   }
   return await response.json()

}

function displayWeatherInfo(data){
const {name: city,
     main: {temp, humidity},
 weather: [{description, id}]}  = data

 card.textContent = ""
 card.style.display = "flex"

const cityDisplay = document.createElement("h1")
const tempDisplay = document.createElement("p")
const humidityDisplay = document.createElement("p")
const descDisplay = document.createElement("p")
const weatherEmoji = document.createElement("p")

cityDisplay.textContent = city
cityDisplay.classList.add("cityDisplay")
card.appendChild(cityDisplay)

// tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`       //  to be in celcius formular
tempDisplay.textContent = `${((temp - 273.15) *(9/5) + 32).toFixed(1)}°F`
cityDisplay.classList.add("tempDisplay")
card.appendChild(tempDisplay)

humidityDisplay.textContent = `Humidity: ${humidity}%`
humidityDisplay.classList.add("humidityDisplay")
card.appendChild(humidityDisplay)

descDisplay.textContent = description
descDisplay.classList.add("descDisplay")
card.appendChild(descDisplay)

weatherEmoji.textContent = getWeatherEmoji(id)
weatherEmoji.classList.add("weatherEmoji")
card.appendChild(weatherEmoji)

}
function getWeatherEmoji(weatherId) {
      switch (true) {
        case (weatherId >= 200 && weatherId < 300):
              return '🌧️'
        case (weatherId >= 300 && weatherId < 400):
              return '🌧️'
        case (weatherId >= 500 && weatherId < 600):
              return '🌧️'
        case (weatherId >= 600 && weatherId < 700):
              return '❄️'
        case (weatherId >= 700 && weatherId < 800):
              return '🍀'
        case (weatherId === 800):
              return '☀️'
        case (weatherId >= 801 && weatherId < 810):
              return '🌧️'
        default:
            return '🌈'
      }
}
function displayError(message) {
    const errorDisplay =  document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay )
}




















// weatherForm.addEventListener('submit', function(event) {
//     event.preventDefault()
//     const city = cityInput.value
//     if (!city) {
//         errorDisplay.style.display = 'block'
//         return
//     }
//     errorDisplay.style.display = 'none'
//     fetchWeatherData(city)
// })

// async function fetchWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === '404') {
//                 errorDisplay.style.display = 'block'
//                 return
//             }
//             errorDisplay.style.display = 'none'
//             updateWeatherUI(data)
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error)
//         })
// }

// function updateWeatherUI(data) {
//     cityDisplay.textContent = data.name
//     tempDisplay.textContent = `${Math.round(data.main.temp)}°F`
//     humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`
//     descDisplay.textContent = data.weather[0].description
//     weatherEmoji.textContent = getWeatherEmoji(data.weather[0].main)
//     card.style.display = 'block'
// }

// function getWeatherEmoji(weatherCondition) {
//     switch (weatherCondition) {
//         case 'Clear':
//             return '☀️'
//         case 'Clouds':
//             return '☁️'
//         case 'Rain':
//             return '🌧️'
//         case 'Snow':
//             return '❄️'
//         default:
//             return '🌈'
//     }
// }
//  function displayError(message){
//     errorDisplay.textContent = message
//     errorDisplay.style.display = 'block'
// }