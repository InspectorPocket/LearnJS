const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add html to list
const generateTemplate = todo => {
    // set template for injection
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    // ADD template to html
    list.innerHTML += html;

};

//  event listener for submit
addForm.addEventListener('submit', e => {
    // prevent refresh
    e.preventDefault();

    // get value
    const todo = addForm.add.value.trim();

    // if the length of the input is positive (greater than 0)
    if (todo.length) {
        // run the function to add a list item
        generateTemplate(todo);
        // remove value from submit field
        addForm.reset();
    }

});

// delete todos
// add event listener to list
list.addEventListener('click', e => {
    // if the element inside 'list' contains the class delete
    if (e.target.classList.contains('delete')) {
        // remove parent element of events target
        e.target.parentElement.remove();
    }
});

// filterTodos function
const filterTodos = term => {
    // converting HTMLcomponent into an array
    Array.from(list.children)
    // seperate each chained method onto a new line for readability
        // goes through the array and filters OUT (!) any matches to what is being typed
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        // add a class to hide any left in the array
        .forEach((todo) => todo.classList.add('hide'));

    Array.from(list.children)
        // goes through the array and filters out any NONE-matches to what is being typed
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        // removes the class to show the item that matches
        .forEach((todo) => todo.classList.remove('hide'));
}

// keyup event
// keyup event listener for search
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    // call function
    filterTodos(term);
});