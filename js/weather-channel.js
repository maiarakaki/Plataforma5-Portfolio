let submitBtn = document.getElementById("send");
let userInput = document.querySelector("input");

function getQueryStringCity(){
    let queryString = userInput.value;

    return queryString.replace(" ", "%20");
}

function loadCity(){
    let city = getQueryStringCity();
    
    if(city === ""){
        alert("Ingrese una ciudad!");
    } else {
        var keyI = "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"
    
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+keyI)
        .done((data)=> displayData(data))
        .fail(function(){
            console.log("failed");
            alert(`La ciudad ${city.replace("%20", " ")} no existe!`);
        })
        .always(clearInput());

    }
}
    
    submitBtn.addEventListener("click", loadCity);
    
    function displayData(data){
        document.querySelector(".widget-container").style.display = "block";
        document.getElementById("city").textContent = data.name;
        console.dir(data);
        document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)} <sup>°C</sup>`;
        document.getElementById("wicon").src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("description").textContent = data.weather[0].description;
    }

    function clearInput(){
        userInput.value = "";
    }