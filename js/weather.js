
const apiKey = 'aa738459555975a351d2e606d3a9c6f9';

weatherSearch('dhaka')



document.getElementById('change-location-btn').addEventListener('click', () => {
    document.getElementById('popup-bg').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('popup-box').style.transform = 'scale(1) translateY(0)';
    }, 50);
})



const getCityName = document.getElementById('city-value');
document.getElementById('search').addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('popup-bg').style.display = 'none';

    }, 500);
    document.getElementById('popup-box').style.transform = 'scale(0) translateY(-500px)';
    let cityNameinput = document.getElementById('city-value').value;
    document.getElementById('city-value').value = '';
    weatherSearch(cityNameinput);
})




function weatherSearch(cityNameinput) {
    if(!cityNameinput)
    {
        cityNameinput = 'dhaka';
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameinput}&APPID=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('cityname').innerText = `${data.name}`;
        document.getElementById('countryName').innerText = `${data.sys.country}`;
        document.getElementById('weather').innerText = `${data.weather[0].description}`;
        document.getElementById('temparature').innerText = `${(data.main.temp - 273.15).toFixed(1)}`;

        document.getElementById('weather-image').setAttribute('src',` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })

}

