/*
    Ideas

    - In deleteTask function ; line 81 , Add all the removed tasks into a "Bin" 
        so a user can readd tasks if they mistakenly deleted it
    - local storage too would be nice

*/


let checkboxes = document.querySelectorAll('.checkbox')
let taskInput = document.getElementById('task-input')
let taskLists = document.querySelector('.list__tasks')
let deleteBtns = document.querySelectorAll('.delete__task-btn')
// console.log(deleteBtns)


//Check task functionality
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

// Add Task Functionailty
let  btn = document.querySelector('.add-task-btn')
// console.log(taskLists)

// Add Task Functionality

btn.addEventListener("click", () => {
    if (taskInput.value === '') {
        console.log("invalid");
    } else {
        // Get taskInput current value
        let newTask = taskInput.value;
        // console.log(newTask)

        // Create todo elements

        let newList = document.createElement('li') //create list tag
        newList.classList.add('list__task', 'flex') //Add classes

        let checkbox = document.createElement('span');
        checkbox.classList.add('checkbox');

        // Add click listener immediately to new checkboxes
        checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checked");
        const parent = checkbox.closest('li');
        parent.classList.toggle('completed');
        });

newList.appendChild(checkbox);

         
         let task = document.createElement('span') //Create Task Description
         task.classList.add('task__description') //Add class
         task.innerHTML = taskInput.value
         newList.appendChild(task)
         
         let deleteBtn = document.createElement('img')
         deleteBtn.setAttribute('src', './images/icon-cross.svg')
         deleteBtn.setAttribute('alt', 'delete task')
         deleteBtn.classList.add('delete__task-btn')
         newList.appendChild(deleteBtn)

        //  console.log(newList)
        //  Add newList to DOM
        taskLists.appendChild(newList)
        taskInput.value = '' //resets input value

    }
});

// Delete task functionality
deleteBtns.forEach(
    (deleteBtn) =>{
        deleteBtn.addEventListener("click", ()=>{
            let currentList = deleteBtn.closest('li') //Gets current list
            //    Feature for later: add to Bin before removing
            currentList.remove()
            console.log(currentList)

        })
    }
)













