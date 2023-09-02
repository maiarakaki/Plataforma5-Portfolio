let mode = 6;
let colors =[];
let squares = document.querySelectorAll(".square");
let clickedColor = "";
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let pickedColor = "";
let backgroundCol = window.getComputedStyle(document.querySelector("body")).backgroundColor;
let resetButton = document.querySelector("#reset");
let difficultyButtons = document.querySelectorAll(".difficulty-btn");


window.onload = init();


function reset(){
    init();
    message.innerHTML="";
}

function init (){
    paintSquares();
    addEventListenersInButtons();
    addEventListenersInSquares();
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
}

function paintSquares(){
    colors = generateRandomColors(mode);
    for (let i = 0 ; i < squares.length ; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (colors[i]==null) {
            squares[i].style.display = "none";
        } else {
            squares[i].style.display = "block";
        }
    }
}

function addEventListenersInSquares () {
    for (let i = 0 ; i < squares.length ; i ++) {
        squares[i].addEventListener("click", function(){
            clickedColor = this.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                message.innerHTML = "¡Correcto!";
                document.querySelector("h1").style.backgroundColor = pickedColor;
                resetButton.innerHTML = "¿Jugar de nuevo?";
                squares.forEach(element => {
                    element.style.backgroundColor = pickedColor;
                });
            } else {
                message.innerHTML = "Intentalo Nuevamente";
                 this.style.backgroundColor= backgroundCol;
            }
        });
    }
}

function addEventListenersInButtons(){
    resetButton.addEventListener("click", reset);
    for (let i = 0 ; i < difficultyButtons.length ; i++) {
        difficultyButtons[i].addEventListener("click", function(e){
            this.classList.toggle("selected");
            console.dir(this);
            this.id == "easyButton" ? document.getElementById("hardButton").classList.toggle("selected") : document.getElementById("easyButton").classList.toggle("selected");
            this.textContent == "Easy" ? mode = 3 : mode = 6;
            reset();
        });
    }
}




function pickColor () {
    var index = Math.floor(Math.random()*colors.length);
    return colors[index];
}

function randomColor(){
    var colorString = "rgb("
    for (let i = 0 ; i < 3 ; i++) {
        colorString += Math.floor(Math.random()*256);
        if (i <2) {
            colorString +=", ";
        }
    }
    colorString+=")";
    return colorString;
}


function generateRandomColors(mode) {
    let colorArr=[];
    for (let i = 0 ; i < mode ; i++){
        colorArr.push(randomColor());
    }
    return colorArr;
}

