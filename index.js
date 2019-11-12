var mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

var list = document.querySelector('ul');
// console.log(list);

var listItems = document.getElementsByTagName('li');
// console.log(listItems); 

var listItems2 = document.getElementsByClassName('todo-item');
// console.log(listItems2);

var listItems3 = document.querySelectorAll('ul .todo-item');


function addTodo(){
    event.preventDefault();                                 // stop page from refreshing
    console.log('target', event.target);
    var newItem = event.target.newTodo.value;               // store the newToDo value in a
    var newListItem = document.createElement('li');         //create li
    var newTextMode = document.createTextMode(newItem);     //create text node
    newListItem.appendChild(newTextMode);                   //append text node to li 
    newListItem.setAttribute('onclick', 'removeTodo()');    //set onclick attribute 
    list.appendChild(newListItem);                         //append li ul

    var newToDoInput = document.getElementById('newToDo'); //get input value 
    newToDoInput.value = "";                              // set value to empty string

    toggle();
}

function removeTodo() {
    var el = event.target;          //get clicked element 
    var parentEl = el.parentNode;   //get the elements parent node
    parentEl.removeChild(el);       //remove the child from the parent 
}

function innerHTMLPractice() {
    var theContent = '<h3 class="text-center"> This is the inner HTML content title </h3> <p> When using the innerHTMl property, the browser takes th estring and creates the HTML elements it finds.</p><p> If content alreay exists, this will overwrite it, not append to it.</p>'; 

    var el = document.getElementById('inner-html-practice');
    el.innerHTML = theContent;
}

    innerHTMLPractice();

function toggle() {
    const el = document.getElementById('inner-html-practice');
    if(el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    }
    else {
        el.classList.add('hidden'); 
    }
}