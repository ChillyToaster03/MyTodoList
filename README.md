# Simple To Do List Web Application 📝

Hey there! 👋 As part of my journey to become a frontend web developer, I built this simple To Do List application. It's a hands-on project that allowed me to solidify my understanding of core web technologies and introduce data persistence.

## Project Overview 🎯

This project is a basic web-based To Do List application. Users can:

* Add new tasks to the list.
* Mark tasks as completed.
* Delete tasks from the list.
* **Persist tasks in the browser's local storage, so the list is saved even after closing the browser.**

It provides a clean and functional interface for managing everyday tasks with the added benefit of data persistence.

## Skills Demonstrated ✨

While developing this To Do List, I gained practical experience in the following frontend technologies:

* **HTML5:** I structured the application using semantic HTML elements to create a well-organized and accessible layout. This includes using `<input>`, `<button>`, and `<div>` elements to define the user interface.
* **CSS3:** I styled the application to be visually appealing and user-friendly. I utilized:
    * **Flexbox:** To create flexible and responsive layouts for the input area and the list of tasks.
    * **Selectors and Properties:** To style various elements, including input fields, buttons, and task items, controlling their appearance, spacing, and responsiveness.
    * **Transitions:** To add smooth visual effects for hover states and interactions, enhancing the user experience.
    * **Media Queries (implicitly handled by flexbox in this simple layout):** Although not explicitly a media query, the flexbox layout adapts well to different screen widths in this context.
* **JavaScript (ES6+):** I implemented the core functionality of the To Do List using JavaScript, including:
    * **DOM Manipulation:** Interacting with the HTML structure to dynamically add, modify, and delete task elements based on user actions. This involved using `document.getElementById`, `document.createElement`, `appendChild`, and `removeChild`.
    * **Event Handling:** Making the application interactive by responding to user events such as clicking the "Add" button, checking/unchecking tasks, and clicking the "Delete" button. I used `addEventListener` to handle these events.
    * **Arrays:** Using JavaScript arrays (`arrayOfTasks`) to store and manage the list of to-do items.
    * **Objects:** Representing each task as an object with properties like `id`, `text`, and `completed`.
    * **Functions:** Organizing the code into reusable functions for adding tasks (`takeTaskPutInArray`, `createDivOfTask`), resetting the input field (`resetInputField`), and handling task completion and deletion.
    * **Event Delegation:** Efficiently handling delete events for dynamically added items by attaching a single listener to the parent container (`addedTasksDiv`).
    * **`Date.now()`:** Generating unique IDs for each task.
    * **`findIndex()`:** Locating specific tasks within the `arrayOfTasks` array for updating their completion status or deleting them.
    * **`splice()`:** Removing elements from the `arrayOfTasks` array.
    * **Keyboard Events:** Handling the "Enter" key press in the input field to trigger the addition of a new task.
    * **`localStorage`:** **Implementing browser's local storage to save and retrieve the To Do List data, ensuring persistence across browser sessions.** This includes:
        * **`localStorage.setItem()`:** Saving the `arrayOfTasks` as a JSON string.
        * **`localStorage.getItem()`:** Retrieving the saved tasks from local storage.
        * **`JSON.stringify()`:** Converting the JavaScript array into a JSON string for storage.
        * **`JSON.parse()`:** Converting the JSON string retrieved from local storage back into a JavaScript array.

## What I Learned 🧠

Building this project was a significant step in my frontend development learning journey. Key takeaways include:

* Understanding how HTML, CSS, and JavaScript work together to create a functional web application with dynamic content.
* Gaining practical experience in manipulating the Document Object Model (DOM) using JavaScript.
* Learning how to handle user events and create interactive web elements.
* Improving my problem-solving skills by implementing the logic for adding, completing, and deleting tasks.
* Understanding the importance of using data structures (like arrays and objects) to manage application data.
* Getting familiar with basic code organization and modularity through the use of functions.
* **Learning how to use `localStorage` to persist data in the browser, providing a better user experience by saving their progress.**

## How to Run ⚙️

To run this To Do List application locally:

1.  Save the HTML code as `index.html`.
2.  Save the CSS code as `todo.css` in the same directory.
3.  Save the JavaScript code as `todov2.js` in the same directory.
4.  Open the `index.html` file in your web browser.

## Future Improvements and Next Steps 🌱

While this is a functional basic To Do List with local storage, there are several areas I'd like to explore for improvement in the future:

* **More Styling:** Enhancing the visual design and user interface with more advanced CSS techniques.
* **Error Handling:** Adding basic input validation to prevent empty tasks from being added.
* **Task Editing:** Implementing the ability to edit existing tasks.
* **Filtering and Sorting:** Adding features to filter tasks (e.g., show only completed or incomplete) and sort them.
* **Exploring Frontend Frameworks/Libraries:** Rebuilding this application using a framework like React or Vue.js to understand component-based architecture and state management.
* **Potentially exploring more advanced local storage techniques or other client-side storage options for more complex data management.**

## Connect with Me! 🔗

I'm excited about my progress in frontend development and eager to learn more. Feel free to connect!
Thank you for taking a look at my To Do List project! 😊