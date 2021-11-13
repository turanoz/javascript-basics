//UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#taskList');
let items;
// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);
    // delete an item
    taskList.addEventListener('click', deleteItem);
    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems)

}

// load items
loadItems();

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    })
}

// get items from Local Storage
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// delete item from Local Storage
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

// set item to Local Storage
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

// create item
function createItem(text) {

    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //create a

    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li

    li.appendChild(a);

    //add li to ul

    taskList.appendChild(li);

}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    } else {
        // create item
        createItem(input.value);
        // save to local storage
        setItemToLS(input.value);
        // clear input
        input.value = '';
    }
    e.preventDefault();
}

// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();
            // delete item from Local Storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

// delete All Items
function deleteAllItems(e) {
    if (confirm('are you sure ?')) {
        // taskList.innerHTML='';
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        // delete all items from Local Storage
        localStorage.clear();
    }
    e.preventDefault();
}