/*
    Ideas

    - In deleteTask function ; line 81 , Add all the removed tasks into a "Bin" 
        so a user can readd tasks if they mistakenly deleted it
    - local storage too would be nice

*/


let checkboxes = document.querySelectorAll('.checkbox')
let taskInput = document.getElementById('task-input')
let taskInputArea = document.querySelector('.task-input-area')
let taskLists = document.querySelector('.list__tasks')
let deleteBtns = document.querySelectorAll('.delete__task-btn')


// Theme toggle feature
let toggleBtn = document.querySelector('.theme-toggle')
let body =  document.querySelector('body')

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})

// Testing Restore Task Feature
 let Bin = []
 Bin.push(
    {
        task: "Create Homework",
        status: "completed"
    },
    {
       task: "Cleane Room",
        status: "pending"
    },
    {
       task: "Do Dishes",
        status: "completed"
    }
 )
// console.log(Bin)
// console.log(`you have deleted ${Bin.length} tasks`)



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
        
        taskInputArea.classList.add('shake-horizontal')
        setTimeout(() => {
             taskInputArea.classList.remove('shake-horizontal');
        }, 2000); // time in milliseconds (1000ms = 1 second)
        // console.log("invalid");
    } else {
        taskInputArea.classList.remove('shake-horizontal')
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

         // Delete task functionality
                deleteBtn.addEventListener("click", ()=>{
                    let currentList = deleteBtn.closest('li') //Gets current list
                    //    Feature for later: add to Bin before removing
                    currentList.remove()
                    // console.log(currentList)

                })

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
            Bin.push(
                // Add the task details here
            )
            currentList.remove()
            console.log(Bin)

        })
    }
)













