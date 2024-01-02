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
}
let form = document.querySelector(".search-form");
form.addEventListener("submit", search);
