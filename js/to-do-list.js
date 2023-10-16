let taskInput = document.querySelector(".input");
let addButton = document.querySelector(".boton-agregar");
let taskContainer = document.querySelector(".container");

addButton.addEventListener("click", ()=>{
    checkInput();
});

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        checkInput();
    }
});

class Item {
    constructor(input){
        this.createDiv(input);
    }

    createDiv(input){
        let div = document.createElement("div");
        div.classList.add("item");
        
        let divInput = this.createInput(input);
        let editButton = this.createButton("boton-editar", "fa-solid fa-lock");
        let trashButton = this.createButton("boton-remover", "fa-regular fa-trash-can");

        div.appendChild(divInput);
        div.appendChild(editButton);
        div.appendChild(trashButton);
        
        editButton.addEventListener("click", ()=>{
            divInput.disabled = !divInput.disabled;
            if(divInput.disabled) {
                editButton.innerHTML = "<i class='fa-solid fa-lock'></i>";
            } else {
                editButton.innerHTML = "<i class='fa-solid fa-lock-open'></i>";
            }
        });
        
        trashButton.addEventListener("click", ()=>{
            div.removeChild(divInput);
            div.removeChild(editButton);
            div.removeChild(trashButton);
        });
        
        taskContainer.appendChild(div);
    }

    createInput(input){
        let divInput = document.createElement("input");
        divInput.value = input;
        divInput.classList.add("item-input");
        divInput.setAttribute("type", "text");
        divInput.setAttribute("disabled", true);
        return divInput;
    }

    createButton(btnClass, btnIconClasses){
        let button = document.createElement("button");
        button.classList.add(btnClass);
        button.innerHTML = `<i class="${btnIconClasses}"></i>`;
        return button;
    }
}

function checkInput(){
    if(taskInput.value != ""){
        new Item(taskInput.value);
        taskInput.value = "";
    }
}