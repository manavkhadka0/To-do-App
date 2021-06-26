// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Funtions

function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();
    console.log('hello');

    // todo Div
    if (todoInput.value != '') {


        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // LI element

        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);

        // Checkmark
        const completedButton = document.createElement('button');
        completedButton.classList.add("complete-btn")
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(completedButton);

        // trash
        const trashButton = document.createElement('button');
        trashButton.classList.add("trash-btn")
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(trashButton);

        // Apped to list

        todoList.appendChild(todoDiv);
    }
    else {
        alert('No task to add')
    }
    // clear Input

    todoInput.value = '';

}



// delete Check

function deleteCheck(event) {
    const item = event.target;

    // delete todoDiv

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation added
        todo.classList.add('fall');
        // removed after transition end
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })

    }


    //CHECKMARRK

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        if (todo.classList.contains("grow")) {
            todo.classList.remove('grow');
            todo.classList.add('shrink');
        }
        else {
            todo.classList.remove('shrink');
            todo.classList.add('grow');
        }


    }
}