let search = document.querySelector('#search')
let input = document.querySelector('input')
let currentDay;
let day1;
let day2;
let day3;
let day4;
let day5;
let cityName;


search.addEventListener("click", function(e){

    if(e.target.matches("button")){

        console.log('clicked')
        console.log(input.value)
        
        fetchWeatherData()

    }
})    



function fetchWeatherData() {

    let weatherGeoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=e6b1fac811d8aab3c6db94ce80eb868d`
        
    fetch(weatherGeoAPI)
        .then(response => response.json())
        .then(citiesFound => {
            let firstCity = citiesFound[0]
            console.log(firstCity.lat)
            console.log(firstCity.lon)
    
            let weatherLocationAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&units=imperial&appid=e6b1fac811d8aab3c6db94ce80eb868d`
            return fetch(weatherLocationAPI)
        }) 
        .then(response => response.json())
        .then(data => {
            // city with all the weather data
            console.log(data)

            cityName = data.city.name

            currentDay = data.list[0]
            day1 = data.list[8]
            day2 = data.list[16]
            day3 = data.list[24]
            day4 = data.list[32]
            day5 = data.list[39]

            renderWeather()

        })

}



function previousSearch() {

}





function renderWeather() {
    // Renders the date in the title for each card
    let currentDayTitle = document.querySelector('#currentDay')
    let day1Title = document.querySelector('#day1')
    let day2Title = document.querySelector('#day2')
    let day3Title = document.querySelector('#day3')
    let day4Title = document.querySelector('#day4')
    let day5Title = document.querySelector('#day5')
    
    currentDayTitle.textContent = cityName + ' ' + dayjs.unix(day1.dt).format("MM/DD/YY")
    day1Title.textContent = dayjs.unix(day1.dt).format("MM/DD/YY")
    day2Title.textContent = dayjs.unix(day2.dt).format("MM/DD/YY")
    day3Title.textContent = dayjs.unix(day3.dt).format("MM/DD/YY")
    day4Title.textContent = dayjs.unix(day4.dt).format("MM/DD/YY")
    day5Title.textContent = dayjs.unix(day5.dt).format("MM/DD/YY")
    
    // Renders temperature
    let currentTemp = document.querySelector('#currentTemp')
    let day1Temp = document.querySelector('#temp1')
    let day2Temp = document.querySelector('#temp2')
    let day3Temp = document.querySelector('#temp3')
    let day4Temp = document.querySelector('#temp4')
    let day5Temp = document.querySelector('#temp5')

    currentTemp.textContent = 'Temp: ' + currentDay.main.temp + '°F'
    day1Temp.textContent = 'Temp: ' + day1.main.temp + '°F'
    day2Temp.textContent = 'Temp: ' + day2.main.temp + '°F'
    day3Temp.textContent = 'Temp: ' + day3.main.temp + '°F'
    day4Temp.textContent = 'Temp: ' + day4.main.temp + '°F'
    day5Temp.textContent = 'Temp: ' + day5.main.temp + '°F'

    // Renders wind
    let currentWind = document.querySelector('#currentWind')
    let day1Wind = document.querySelector('#wind1')
    let day2Wind = document.querySelector('#wind2')
    let day3Wind = document.querySelector('#wind3')
    let day4Wind = document.querySelector('#wind4')
    let day5Wind = document.querySelector('#wind5')

    currentWind.textContent = 'Wind: ' + currentDay.wind.speed + ' MPH'
    day1Wind.textContent = 'Wind: ' + day1.wind.speed + ' MPH'
    day2Wind.textContent = 'Wind: ' + day2.wind.speed + ' MPH'
    day3Wind.textContent = 'Wind: ' + day3.wind.speed + ' MPH'
    day4Wind.textContent = 'Wind: ' + day4.wind.speed + ' MPH'
    day5Wind.textContent = 'Wind: ' + day5.wind.speed + ' MPH'

    // Renders humidity
    let currentHumidity = document.querySelector('#currentHumidity')
    let day1Humidity = document.querySelector('#humidity1')
    let day2Humidity = document.querySelector('#humidity2')
    let day3Humidity = document.querySelector('#humidity3')
    let day4Humidity = document.querySelector('#humidity4')
    let day5Humidity = document.querySelector('#humidity5')

    currentHumidity.textContent = 'Humidity: ' + currentDay.main.humidity + '%'
    day1Humidity.textContent = 'Humidity: ' + day1.main.humidity + '%'
    day2Humidity.textContent = 'Humidity: ' + day2.main.humidity + '%'
    day3Humidity.textContent = 'Humidity: ' + day3.main.humidity + '%'
    day4Humidity.textContent = 'Humidity: ' + day4.main.humidity + '%'
    day5Humidity.textContent = 'Humidity: ' + day5.main.humidity + '%'

    // Renders icons
    let currentIcon = document.querySelector('#currentIcon')
    let icon1 = document.querySelector('#icon1')
    let icon2 = document.querySelector('#icon2')
    let icon3 = document.querySelector('#icon3')
    let icon4 = document.querySelector('#icon4')
    let icon5 = document.querySelector('#icon5')

    currentIcon.src = `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`
    icon1.src = `https://openweathermap.org/img/wn/${day1.weather[0].icon}@2x.png`
    icon2.src = `https://openweathermap.org/img/wn/${day2.weather[0].icon}@2x.png`
    icon3.src = `https://openweathermap.org/img/wn/${day3.weather[0].icon}@2x.png`
    icon4.src = `https://openweathermap.org/img/wn/${day4.weather[0].icon}@2x.png`
    icon5.src = `https://openweathermap.org/img/wn/${day5.weather[0].icon}@2x.png`

}


