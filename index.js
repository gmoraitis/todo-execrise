// 1. Taking the elements [ input area, add button , list area ] from the DOM
const userInput = document.getElementById('user-input');
const button = document.getElementById('add-todo-button');
const todoList = document.getElementById('todo-list');

// 2. Add Todo button is the main event listener for the app
// It takes the user input and creates a new todo item
// everything is encapsulated in this button event listener.

// |------------| |------------|   
// | Input Area | | Add Button |  
// |------------| |---------|--|
// |            |           |      
// |------------|           |  
// | List Area  |<----------|  
// |------------|             
                         

button.addEventListener('click', function () {
    // Create a new todo if the user 
    // input is not empty
    if (userInput.value === '') {
        return;
    }


    // NOTE: First make the html are to pass the data. Then see how to pass the data to the html area. 
    // Create a new todo li element.
    const newTodo = document.createElement('li');
    // Take the user input and set it as the text content of the new todo li element
    newTodo.textContent = userInput.value;
    
    // Append the new todo li with the text to the todo list area
    todoList.appendChild(newTodo);
    
    // Clear the user input field in the input area
    userInput.value = '';


    // Create a delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';

    // Append the delete button to the new todo
    newTodo.appendChild(deleteButton);

    // Remove the todo when the delete button is clicked
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(newTodo);
    });

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    // Append the edit button to the new todo
    newTodo.appendChild(editButton);

    // Edit the todo when the edit button is clicked
    editButton.addEventListener('click', function () {
        const editInput = document.createElement('input');
        editInput.value = newTodo.firstChild.nodeValue; // Only take the text content of the todo item
        newTodo.textContent = '';
        newTodo.appendChild(editInput);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        newTodo.appendChild(saveButton);

        saveButton.addEventListener('click', function () {
            newTodo.textContent = editInput.value;
            newTodo.appendChild(deleteButton);
            newTodo.appendChild(editButton);
        });
    });

}
);






