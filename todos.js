var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app .addTodo input');
var buttonElement = document.querySelector('#app .addTodo button');

var todos = [
    'Dormir',
    'Correr',
    'Andar'
];

renderTodo();

buttonElement.onclick = addTodoInArray;

function renderTodo(){    
    
    for( todo of todos ){

        createToDoItem(todo);

    }

}

function addTodoInArray(){

    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';

    createToDoItem(todos[todos.length -1])

}

function createToDoItem(objToDo){

    var todoElement = document.createElement('li');
    var labelElement = document.createElement('label');
    var inputItemElement = document.createElement('input');
    var pElement = document.createElement('p');
    var spanElement = document.createElement('span');
    var todoText = document.createTextNode(objToDo);

    todoElement.appendChild(labelElement);
    labelElement.appendChild(inputItemElement);
    inputItemElement.setAttribute('type','checkbox')    
    labelElement.appendChild(pElement);
    labelElement.appendChild(spanElement);
    pElement.appendChild(todoText);
    listElement.appendChild(todoElement);

    return listElement;
}