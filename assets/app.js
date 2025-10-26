
// Grab Elements

let checkboxes = document.querySelectorAll('.checkbox')
let  btn = document.querySelector('.add-task-btn')
let taskInput = document.getElementById('task-input')
let taskLists = document.querySelector('.list__tasks')
// console.log(taskLists)


// Check task Functionality

checkboxes.forEach(
    (checkbox) =>{
        checkbox.addEventListener("click", ()=>{
            checkbox.classList.toggle("checked")

            // grab the closest li parent
            const parent = checkbox.closest('li')
            parent.classList.toggle('completed')
        })
    }
)

// Add Task Functionality

btn.addEventListener("click", () => {
    if (taskInput.value === '') {
        console.log("invalid");
    } else {
        // Get taskInput current value
        let newTask = taskInput.value;
        console.log(newTask)

        // Create todo elements

        let newList = document.createElement('li') //create list tag
        newList.classList.add('list__task', 'flex') //Add classes

        let checkbox = document.createElement('span') //Create checkbox
         checkbox.classList.add('checkbox') //Add class
         newList.appendChild(checkbox)
         
         let task = document.createElement('span') //Create Task Description
         task.classList.add('task__description') //Add class
         task.innerHTML = taskInput.value
         newList.appendChild(task)
         
         let deleteBtn = document.createElement('img')
         deleteBtn.setAttribute('src', './images/icon-cross.svg')
         deleteBtn.setAttribute('alt', 'delete task')
         newList.appendChild(deleteBtn)

        //  Add newList to DOM

    }
});

        













