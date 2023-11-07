const input = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const weather = document.querySelector(".weather-container");
const select = document.querySelector("select")

// fetch("https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=berlin")
// .then(res=>res.json() )
// .then(displayData=>console.log(displayData))


function getData(url) {
   return fetch(url)
        .then(res =>   res.json() )
       
}

form.addEventListener("submit", search);

function search(e) {
    e.preventDefault();
    getData(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`)
    .then(data =>{
        console.log(data)
        weather.innerHTML +=`
            <p class="city">City: ${data.location.name}</p>
             <p class="country">Country: ${data.location.country}</p>
            <p class="weather-forecast">Weather forecast: ${data.current[select.value]}</p>
            <p class="sky-condition">Sky condition: ${data.current.condition.text}</p> 
        `

    })
}