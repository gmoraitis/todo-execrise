// take the user input and console it
const userInputTag = document.getElementById("user-input")

// take the button tag
const buttonTag = document.getElementById('add-todo')

// take the list tag
const todoListTag = document.getElementById('todo-list')

// Add an action to button when clicked
buttonTag.addEventListener('click', function () {
    ///////////////////////////////////
    // Show the value from input to list
    const todo = document.createElement('li')
    todo.textContent = userInputTag.value
    todoListTag.appendChild(todo)
    userInputTag.value = ''

    ///////////////////////////////////
    // add delete button
    const deleteButton = document.createElement('button')
    todo.appendChild(deleteButton)
    deleteButton.textContent = "Delete"

    // add delete logic to button when we click it
    deleteButton.addEventListener('click', function () {
        todo.remove()
    })

    ///////////////////////////////////
    // add edit button to each todo
    const editButton = document.createElement('button')
    todo.appendChild(editButton)
    editButton.textContent = 'Edit'

    // add logic to edit button
    editButton.addEventListener('click', function () {
        const editTodo = document.createElement('input')
        editTodo.value = todo.firstChild.nodeValue
        todo.textContent = ''
        todo.appendChild(editTodo)

        const saveButton = document.createElement('button')
        saveButton.textContent = 'Save'

        todo.appendChild(saveButton)

        ////////////////////////////////////
        // save button
        // take what is already in
        saveButton.addEventListener('click', function() {
        todo.textContent = editTodo.value
        todo.appendChild(deleteButton)
        todo.appendChild(editButton)

        })
        
    })





})