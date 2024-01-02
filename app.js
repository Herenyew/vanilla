function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let city = document.querySelector(".search-form-input").value;
  h1.innerHTML = city;
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let current_time = document.querySelector(".Time");
  let day = week[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  current_time.innerHTML = `${day} ${hour}:${minute}`;
  let key = `te40ea2d53204b6fa4eb4fo881b4b3b4`;
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiurl).then(get_weather);
  axios.get(apiurl).then(get_weather_condition);
}
let form = document.querySelector(".search-form");
form.addEventListener("submit", search);

function get_weather(response) {
  let temperature_value = document.querySelector("#temp-value");
  temperature_value.innerHTML = response.data.temperature.current;
}
function get_weather_condition(response) {
  let weather_condition = document.querySelector("#condition");
  weather_condition.innerHTML = response.data.condition.description;
}
function get_humidity(response) {
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
}
function get_wind(response) {
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}
