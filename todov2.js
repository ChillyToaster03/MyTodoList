const inputField = document.getElementById("input-field")
const addBtn = document.getElementById("add-button")
const addedTasksDiv = document.getElementById("added-items")
const arrayOfTasks = getArrayFromLocalStorage()

arrayOfTasks.forEach(task => {
    createDivOfTask(task)
});

function takeTaskPutInArray() {
    let task = inputField.value
    let newTask = {
        id : Date.now(), 
        text : task,
        completed : false,
    }
    arrayOfTasks.push(newTask)
    saveArrayIntoLocalStorage()
    console.log(arrayOfTasks)
    
}
function resetInputField() {
    inputField.value = ""
}
function createDivOfTask(task) {
    // Create Div That will Contain the New Task and its elements
    const newTaskDiv = document.createElement('div')
    newTaskDiv.setAttribute("id", task.id)
    //Create CheckBox
    const checkBox = document.createElement('input')
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "checkbox")
    checkBox.setAttribute("checkbox-id", task.id)
    newTaskDiv.appendChild(checkBox)
    // Create New Span that contains the Input
    const newTask = document.createElement('span')
    newTask.innerHTML = task.text
    newTaskDiv.appendChild(newTask)
    // Create Delete button
    const delBtn = document.createElement('button')
    delBtn.setAttribute("type", "button" )
    delBtn.innerHTML = "Delete"
    delBtn.setAttribute("class", "delete")
    delBtn.setAttribute("data-task-id", task.id)
    newTaskDiv.appendChild(delBtn)
    // Append Div with New Task to Parent Div
    addedTasksDiv.appendChild(newTaskDiv)
    // Event Listener for Checkbox
    checkBox.addEventListener("change", function (event) {
        let id = event.target.getAttribute("checkbox-id")
        let divToComplete = document.getElementById(id)
        if (event.target.checked) {
            divToComplete.classList.add("completed")
            const indexToChangeConditionInArray = arrayOfTasks.findIndex(t => t.id == id) 
            if (indexToChangeConditionInArray != -1) {
                task.completed = true
            }
            
        } else {
            divToComplete.classList.remove("completed")
            const indexToChangeConditionInArray = arrayOfTasks.findIndex(t => t.id == id) 
            if (indexToChangeConditionInArray != -1) {
                task.completed = false
            }
        }        
    })
    
}
addBtn.addEventListener("click", function () {
    takeTaskPutInArray()
    createDivOfTask(arrayOfTasks[arrayOfTasks.length - 1])
    resetInputField()   
})
addedTasksDiv.addEventListener("click", function(event){
    if (event.target.classList.contains("delete")) {
        // Get Id from delete button when clicked
        let id = event.target.getAttribute("data-task-id")
        // Get Parent Div by matchinng its Id to Button Data-id
        let deletedDIv = document.getElementById(id)
        // Remove Div
        addedTasksDiv.removeChild(deletedDIv)
        //Get Index of Task in array
        const indexToDeleteInArray = arrayOfTasks.findIndex(task => task.id == id )
        // Condition to assure index exists 
        if (indexToDeleteInArray != -1) {
            //Remove Task from Array
            arrayOfTasks.splice(indexToDeleteInArray, 1)
        }
        saveArrayIntoLocalStorage()
    }
})
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
function saveArrayIntoLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}
function getArrayFromLocalStorage() {
    let storedTask = localStorage.getItem("tasks")
    if (storedTask) {
        return JSON.parse(storedTask)
    }else{
        return []
    }
}