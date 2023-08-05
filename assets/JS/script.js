let search = document.querySelector('#search')
let input = document.querySelector('input')


search.addEventListener("click", function(e){

    if(e.target.matches("button")){

        console.log('clicked')
        console.log(input.value)
        
        let weatherGeoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=e6b1fac811d8aab3c6db94ce80eb868d`
        
        fetch(weatherGeoAPI)
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0]
                console.log(firstCity.lat)
                console.log(firstCity.lon)
        
                let weatherLocationAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=e6b1fac811d8aab3c6db94ce80eb868d`
                return fetch(weatherLocationAPI)
            }) 
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })




    }
})    





