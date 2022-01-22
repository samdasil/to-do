var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app .addTodo input');
var buttonElement = document.querySelector('#app .addTodo button');
var buttonErase = document.querySelector('#erase');
var buttonRemove = document.querySelector('#remove-selected');

const localItems = JSON.parse(localStorage.getItem('ListItems'))
let ListItems = localStorage.getItem('ListItems') !== null ? localItems : []

const updateLocalStorage = () => {
    localStorage.setItem('ListItems', JSON.stringify(ListItems))
}

renderTodo();

buttonElement.onclick = addTodoInArray;
buttonErase.onclick = removeAll;
buttonRemove.onclick = removeSelected;

function renderTodo(){    
    
    for( todo of ListItems ){

        createToDoItem(todo);

    }

}

function addTodoInArray(){

    var todoText = inputElement.value;

    ListItems.push(todoText);

    inputElement.value = '';

    createToDoItem(ListItems[ListItems.length -1])

    updateLocalStorage()

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

function removeAll(){
    ListItems = []
    localStorage.setItem('ListItems',"[]")
    listElement.innerHTML = ''
}

function removeSelected(){
    console.log("listElement",listElement);
}