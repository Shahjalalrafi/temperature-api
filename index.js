// const btn = document.getElementById('btn');
// btn.addEventListener('click', function() {

//     const cityName = document.getElementById('input').value;
//     const api = "938356ce0f30dc169e4b8941b4bf09a1";
//     const area = document.getElementById('area')
//     area.innerText = cityName
//     getWeather(cityName,api,area);
// })


// function getWeather(cityName,api,area) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api}`)
//     .then(res => res.json())
//     .then(data => {

//         console.log(area)
//         const celcious = document.getElementById('celcius')
//         const weather = document.getElementById('weather')
//         celcious.innerText = data.main.temp
//         weather.innerText = weather[0].main
//         console.log(data)
//     })
// }

const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    const cityName = document.getElementById('input').value
    const area = document.getElementById('area')
    area.innerText = cityName
    const apiKey = "938356ce0f30dc169e4b8941b4bf09a1"
    getReport(cityName, apiKey)
})

function getReport(city,key) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
    .then(res => res.json())
    .then(data => {
        const celcious = document.getElementById('celcius')
        celcious.innerText = data.main.temp
        console.log(data)
    })
}