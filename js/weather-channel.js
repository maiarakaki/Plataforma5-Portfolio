let submitBtn = document.getElementById("send");
let userInput = document.querySelector("input");

function getQueryStringCity(){
    let queryString = userInput.value;

    return queryString.replace(" ", "%20");
}

function loadCity(){
    let city = getQueryStringCity();
    // console.log(city);
    var keyI = "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"


    jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+keyI, (responseData)=>{
         console.log(responseData);
    });

    document.querySelector(".widget-container").style.visibility = "visible"

}

submitBtn.addEventListener("click", loadCity);