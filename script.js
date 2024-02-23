const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("myButton");

function createListElement() {
    let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
}
function addListAfterClick() {
    if(inputBox.value.length > 0) {
        createListElement();
    }
    saveData();
}

function addListAfterKeypress(event) {
    if(inputBox.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

button.addEventListener("click", addListAfterClick);

inputBox.addEventListener("keypress", addListAfterKeypress); 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();