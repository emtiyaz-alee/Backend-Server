var button = document.querySelector(".button");
// var inputvalue = document.querySelector(".search-box");
// var temp = document.querySelector(".current .temp");
var description = document.querySelector(".current .weather");
// var let city = document.querySelector(".location .city");
var date = document.querySelector(".location .date");


button.addEventListener("click", function () {
var cityName = document.querySelector(".search-box").value;

  axios.get(`http://localhost:3000/weather/${cityName}`)
    .then((response) => {
 document.querySelector(" .temp").innerHTML = `${(response.data.temp)}°C`;
 document.querySelector(" .weather").innerText = `${response.data.description}`;
 let now = new Date();
 date.innerText = dateBuilder(now);
      
    })
    
    .catch((err) => alert(`Your ${cityName} city is not found in our record`));
});



function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
