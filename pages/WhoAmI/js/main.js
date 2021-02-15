// const apiKey = '731a6f4206cc423b994fb6dd03fb8a68';

// fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`)
//     .then(res => res.json())
//     .then(data => showYourIp(data))
//     .catch(err => console.log(err))
// fetch(`http://ip-api.com/json`)
//     .then(res => res.json())
//     .then(data => showYourIp(data))
//     .catch(err => console.log(err))
fetch(`https://ipwhois.app/json/`)
    .then(res => res.json())
    .then(data => showYourIp(data))
    .catch(err => console.log(err))
function showYourIp(data) {
    document.getElementById('ip-table').innerHTML =
    `<tr>
        <th>IP Address</th>
        <td>${data.ip}<sup>${data.type}</sup></td>
    </tr>
    <tr>
        <th>IP Loction</th>
        <td>${data.city},${data.country}(${data.country_code})</td>
    </tr>
    <tr>
        <th>Region</th>
        <td>${data.region}</td>
    </tr>
    <tr>
        <th>Capital</th>
        <td>${data.country_capital}</td>
    </tr>
    <tr>
        <th>Flag</th>
        <td><img src="${data.country_flag}"></td>
    </tr>
    <tr>
        <th>Calling Code</th>
        <td>${data.country_phone}</td>
    </tr>
    <tr>
        <th>Currency</th>
        <td>${data.currency}</td>
    </tr>
    <tr>
        <th>Currency Rate</th>
        <td>${data.currency_rates}<sup>${data.currency_symbol}</sup> per $</td>
    </tr>
    
    <tr>
        <th>Internet Service Provider</th>
        <td>${data.isp}</td>
    </tr>
    <tr>
        <th>Organization</th>
        <td>${data.org}</td>
    </tr>
    <tr>
        <th>Platform</th>
        <td>${navigator.oscpu.split(';')[0]}</td>
    </tr>
    <tr>
        <th>Browser</th>
        <td>${navigator.appCodeName}(${navigator.appVersion})</td>
    </tr>
    <tr>
        <th>User Agent</th>
        <td>${navigator.userAgent}</td>
    </tr>
    <tr>
        <th>Screen Size</th>
        <td>${window.outerWidth} X ${window.outerHeight}</td>
    </tr>
    <tr>
        <th>Geo Location</th>
        <td>Latitude ${data.latitude} Longitude ${data.longitude}</td>
    </tr>
    <tr>
        <th>Time Zone</th>
        <td>${data.timezone_gmt} : ${data.timezone}</td>
    </tr>`
}