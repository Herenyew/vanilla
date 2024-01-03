function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let city = document.querySelector(".search-form-input").value;
  h1.innerHTML = city;
  let now = new Date();
  get_date(now);
  let key = `te40ea2d53204b6fa4eb4fo881b4b3b4`;
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;

  axios.get(apiurl).then(get_weather);
  axios.get(apiurl).then(get_weather_condition);
  axios.get(apiurl).then(get_humidity);
  axios.get(apiurl).then(get_wind);
  axios.get(apiurl).then(get_icon);
}

function get_date(date) {
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
  if (minute < 10) {
    minute = `0${minute}`;
  }
  current_time.innerHTML = `${day} ${hour}:${minute}`;
}

function get_weather(response) {
  let temperature_value = document.querySelector("#temp-value");
  temperature_value.innerHTML = Math.round(response.data.temperature.current);
}
function get_weather_condition(response) {
  let weather_condition = document.querySelector("#condition");
  weather_condition.innerHTML = response.data.condition.description;
}
function get_humidity(response) {
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
}
function get_wind(response) {
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}
function get_icon(response) {
  let iconElement = document.querySelector(".icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
}
let form = document.querySelector(".search-form");
form.addEventListener("submit", search);

let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
week.forEach(function (day) {
  let wholeweek = document.querySelector(".wholeweek");
  let whole_week = `<div class="whole week">
          <div class="day">${day}</div>
          <div class="icon">🌤️</div>
          <span class="max"><strong>19º</strong></span>
          <span class="min">12º</span>
        </div>`;
  wholeweek.innerHTML = whole_week + wholeweek.innerHTML;
});
