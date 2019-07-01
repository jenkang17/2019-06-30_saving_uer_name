const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    console.log(text);
    // const ul = document.createElement("li");
    // const delBtn = document.createElement("button");
    // delBtn.value = "x";
    // const span = document.createElement("span");
    // span.innerText = text;
    // li.appendChild(span);
    // li.appendChild(delBtn);
    // toDoList.appendChild(li);
}

function handleSubmit(event){
    event.prevenDefault();
    const currentValue  = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
//입력창에 입력후 실행이 안됨 

