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