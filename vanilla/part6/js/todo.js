const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEKY = "todos";

let toDos = [];

// JSON.stringify(player)
// a, b, c -> ["a","b","c"] array 처럼 가능 
// JSON.parse("[1,2,3,r]")
// "[1,2,3,4]" -> [1, 2, 3, 4]
function saveToDos() {
    localStorage.setItem(TODOS_KEKY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function deleteToDos(item, id) {
    return item.id !== id
}

// filter : 유지하고 싶으면 true 를 리턴
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

/*
<li>
    <span>text</span>
    <button>x</button>
</li>
*/
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEKY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach 각각의 item 에 대해 실행 (item)
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item))
    // === sayHello(item) { console.log("hello"); } 
}
