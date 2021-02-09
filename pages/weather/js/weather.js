
const apiKey = 'aa738459555975a351d2e606d3a9c6f9';



document.getElementById('change-location-btn').addEventListener('click', popup) 
function popup() {
    document.getElementById('popup-bg').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('popup-box').style.transform = 'scale(1) translateY(0)';
    }, 200);
}



const getCityName = document.getElementById('city-value');
document.getElementById('search').addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('popup-bg').style.display = 'none';

    }, 100);
    document.getElementById('popup-box').style.transform = 'scale(0) translateY(-500px)';
    let cityNameinput = document.getElementById('city-value').value;
    document.getElementById('city-value').value = '';
    weatherSearch(cityNameinput);
})




function weatherSearch(cityNameinput) {
    if (!cityNameinput) {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameinput}&APPID=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            if (data.name) {
                document.getElementById('cityname').innerText = `${data.name}`;
                document.getElementById('countryName').innerText = `${data.sys.country}`;
                document.getElementById('weather').innerText = `${data.weather[0].description}`;
                document.getElementById('temparature').innerHTML = `${(data.main.temp - 273.15).toFixed(1)}&deg;C`;
                document.getElementById('weather-image').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            }
            else if(data.name == undefined){
                alert('Invalid Input');
            }

        })

}

