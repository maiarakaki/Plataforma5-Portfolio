let taskInput = document.querySelector(".input");
let addButton = document.querySelector(".boton-agregar");
let taskContainer = document.querySelector(".container");

class Item {
    constructor(input){
        this.createDiv(input);
    }

    createDiv(input){
        let div = document.createElement("div");
        div.classList.add("item");
        div.appendChild(this.createInput(input));
        div.appendChild(this.createButton("boton-editar", "fa-solid fa-lock"));
        div.appendChild(this.createButton("boton-remover", "fa-regular fa-trash-can"));
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