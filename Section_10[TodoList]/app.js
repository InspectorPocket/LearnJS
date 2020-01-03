const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

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