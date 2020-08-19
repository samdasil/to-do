var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app .addTodo input');
var buttonElement = document.querySelector('#app .addTodo button');

var todos = [
    'Dormir',
    'Correr',
    'Andar'
];

renderTodo();

console.log(buttonElement);

buttonElement.onclick = addTodo;

function renderTodo(){

    listElement.innerHTML = '';

    for( todo of todos ){

        var todoElement = document.createElement('li');
        var labelElement = document.createElement('label');
        var inputItemElement = document.createElement('input');
        var pElement = document.createElement('p');
        var spanElement = document.createElement('span');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(labelElement);
        labelElement.appendChild(inputItemElement);
        inputItemElement.setAttribute('type','checkbox')
        labelElement.appendChild(pElement);
        labelElement.appendChild(spanElement);
        pElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }

}

function addTodo(){

    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';

    renderTodo();

}