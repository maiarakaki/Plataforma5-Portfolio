let submitBtn = document.getElementById("send");
let userInput = document.querySelector("input");

function getQueryStringCity(){
    let queryString = userInput.value;

    return queryString.replace(" ", "%20");
}

async function loadCity(){
    let city = getQueryStringCity();
    // console.log(city);
    var keyI = "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"
    let data;


   await jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+keyI, (responseData)=>{
         data = responseData;
        });
        
    document.querySelector(".widget-container").style.visibility = "visible"
    document.getElementById("city").textContent = data.name;
    console.dir(data);
    document.getElementById("temp").innerHTML = `${data.main.temp} <sup>°C</sup>`;
    document.getElementById("wicon").src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("description").textContent = data.weather[0].description;
}

submitBtn.addEventListener("click", loadCity);