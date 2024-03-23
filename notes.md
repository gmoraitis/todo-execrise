The general pattern for interacting with the DOM can be broken down into two steps: "Retrive it .." and "Show it". Here's the universal pattern:

1. **Take it (Retrieve user input or data from the DOM)**
   - Pattern 1: Select the element from which you want to retrieve data. This is typically done using `document.querySelector` or `document.getElementById`, passing in the CSS selector or ID of the element.
   - Pattern 2: Retrieve the data from the selected element. For input fields, this is typically done using the `value` property. For other elements, you might use the `textContent` or `innerHTML` property, or use `getAttribute` to retrieve the value of a specific attribute.

2. **Show it (Display data or changes on the DOM)**
   - Pattern 1: Select the element where you want to display the data or make changes. Again, this is typically done using `document.querySelector` or `document.getElementById`.
   - Pattern 2: Update the selected element with the new data or changes. For text changes, this is typically done using the `textContent` or `innerHTML` property. To add new elements, you might use `appendChild` or `insertAdjacentHTML`. To change attributes, you would use `setAttribute`.

Remember, these patterns are not exclusive to any specific task. They are general patterns for interacting with the DOM and can be used in a variety of different situations. The specific methods you use might vary depending on the task, but the overall pattern of "Take it" and "Show it" will remain the same.

(!) Specifically for `index.html`  and `index.js`
1. **User Interaction**: The user enters a todo item in the input field (`userInput`) and clicks the "Add Todo" button (`button`).

2. **Event Listener Activation**: The click event listener on the "Add Todo" button is triggered.

3. **Todo Creation**: Inside the event listener callback function:
   - A check is made to ensure the input field is not empty.
   - A new list item (`newTodo`) is created.
   - The text content of `newTodo` is set to the value of the input field.
   - `newTodo` is appended to the todo list (`todoList`).
   - The input field is cleared.

4. **Delete Button Creation**: Still inside the event listener callback function:
   - A new button (`deleteButton`) is created.
   - The text content of `deleteButton` is set to 'Delete'.
   - `deleteButton` is appended to `newTodo`.

5. **Delete Functionality**: An event listener is added to `deleteButton`. When `deleteButton` is clicked, `newTodo` is removed from `todoList`.

This flow repeats each time the user enters a todo item and clicks the "Add Todo" button.