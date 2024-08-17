console.log("efsfsfsfsf");


const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodoInput');
const  addTodoBtn = document.getElementById('addTodoBtn'); 

addTodoBtn.addEventListener("click",()=>{
    const newTodoText = newTodoInput.value;

    if(newTodoText !==""){
        const newTodoItem = document.createElement("li");
        newTodoItem.innerHTML = newTodoText;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerHTML="X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function () {
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newTodoInput.value="";
    }
})