TodoList = [];

rendertodo();

function rendertodo() {
let todoListHTML = '';

TodoList.forEach(function (todoObject,index) {
    let {name , dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button add-delete-button">Delete</button>
    `; 
    todoListHTML += html;
})

    document.querySelector('.js-todolist')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.add-delete-button')
    .forEach(((deleteButton, index) => {
        deleteButton.addEventListener('click',() => {
            TodoList.splice(index, 1)
              rendertodo();
        })
    }))
    
}

    document.querySelector('.js-delete-button')
        .addEventListener('click', () => {
            addtodo();
        });


function addtodo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dateInputelement = document.querySelector('.js-duedate');
    const dueDate = dateInputelement.value;

    TodoList.push(
        {//name: name,
         //dueDate: dueDate,
         name,
         dueDate
});
    console.log(TodoList);
    inputElement.value = '';
    dateInputelement.value = '';
    rendertodo();
}

