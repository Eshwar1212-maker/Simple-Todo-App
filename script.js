
window.addEventListener('load', () => {
    //Get the form element, input element, and tasks elements
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const tasksList = document.querySelector("#tasks")

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //Store whatever is in the input value in a variable
        const task = input.value;

        //Creating a new div for the tasks that we will display on the screen, giving it 
        //it's respecitve class name of task
        const taskElement = document.createElement('div')
        taskElement.classList.add('task')

        //Creatinga  new div, for the content inside of the task
        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');

        //Appending the task content to the tasks
        taskElement.appendChild(taskContentElement);

        //Creating the input, that will go in the tasks content
        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', 'readonly')

        taskContentElement.appendChild(taskInputElement);

        //Creating three elements for the actions, edit and delete
        const taskActionsElements = document.createElement('div');
        taskActionsElements.classList.add('actions');

        const taskEditElement = document.createElement('button')
        taskEditElement.classList.add('edit');
        taskEditElement.innerText = 'Edit'

        const taskDeleteElement = document.createElement('button')
        taskDeleteElement.classList.add('delete')
        taskDeleteElement.innerText = "Delete";

        taskActionsElements.append(taskEditElement, taskDeleteElement);

        taskElement.appendChild(taskActionsElements);

        tasksList.appendChild(taskElement);

        input.value = ''

        taskEditElement.addEventListener('click', (e) => {
            if (taskEditElement.innerText.toLowerCase() == "edit") {
                taskEditElement.innerText = "Save";
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
            } else {
                taskEditElement.innerText = "Edit";
                taskInputElement.setAttribute("readonly", "readonly")
            }
        })

        taskDeleteElement.addEventListener('click', (e) => {
            tasksList.removeChild(taskElement);
        })
    })
})