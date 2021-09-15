const image = document.getElementById('image');
const country = document.getElementById('country');
const sel = document.getElementById('sel');
const weather = document.getElementById('weather');


const search = () => {
    const city = document.getElementById('city').value;
    const API_KEY = `1a9611b6dc98bd3c72c7b8bc99afe31d`;
    // console.log(city)

// const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
fetch(url)
.then(res => res.json())
.then(data => setWeather(data)) 
}


const setWeather = data => {
    console.log(data.weather[0].icon)
   const countryData = data.name;
   const selData = data.main.temp;
   const weatherData = data.weather[0].main;
   const imageSrc= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   image.src =imageSrc;

 


   country.innerText = countryData;
   sel.innerText = selData;
   weather.innerText = weatherData

}