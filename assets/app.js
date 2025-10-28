/*
    Ideas

    - In deleteTask function ; line 81 , Add all the removed tasks into a "Bin" 
        so a user can readd tasks if they mistakenly deleted it
    - local storage too would be nice

*/


let checkboxes = document.querySelectorAll('.checkbox');
let taskInput = document.getElementById('task-input');
let taskInputArea = document.querySelector('.task-input-area');
let taskLists = document.querySelector('.list__tasks');
let deleteBtns = document.querySelectorAll('.delete__task-btn');
let toggleBtn = document.querySelector('.theme-toggle');
let body = document.querySelector('body');

// Bin feature (for deleted tasks)
let Bin = [];

// ---- THEME TOGGLE ----
function handleThemeToggle() {
  body.classList.toggle('dark');
}
toggleBtn.addEventListener('click', handleThemeToggle);

//Count tasks
function updateTaskCount() {
  const taskList = document.querySelectorAll('.list__task');
  const taskCount = document.querySelector('.item-count');
  
  // Count only uncompleted tasks
  const activeTasks = Array.from(taskList).filter(task => !task.classList.contains('completed'));
  
  taskCount.textContent = activeTasks.length;
}


// ---- CHECK TASK  & TASK COUNT  FUNCTIONALITY----
function handleToggleCheckbox(e) {
  const checkbox = e.currentTarget;
  checkbox.classList.toggle('checked');
  const parent = checkbox.closest('li');
  parent.classList.toggle('completed');

  updateTaskCount();
  

}

// Attach to existing checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleToggleCheckbox);
});

// ---- DELETE TASK FUNCTIONALITY ----
function handleDeleteTask(e) {
  const deleteBtn = e.currentTarget;
  const currentList = deleteBtn.closest('li');
  const taskDescription = currentList.querySelector('.task__description').textContent;

  // Add deleted task to Bin
  Bin.push({
    task: taskDescription,
    status: currentList.classList.contains('completed') ? 'completed' : 'pending' //Checks if the claasslist contains 'completed'
  });

  currentList.remove();
  console.log('Deleted tasks in Bin:', Bin);
  updateTaskCount();
}

// Attach to existing delete buttons
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', handleDeleteTask);
});

// ---- ADD TASK FUNCTIONALITY ----
function handleAddTask() {
  if (taskInput.value === '') { //If input value is empty
    taskInputArea.classList.add('shake-horizontal'); //add shake animation class
    setTimeout(() => {
      taskInputArea.classList.remove('shake-horizontal');
    }, 2000); //remove shake animation class after 2 seconds
    return;
  }

  taskInputArea.classList.remove('shake-horizontal');
  let newTaskText = taskInput.value;

  let newList = document.createElement('li');
  newList.classList.add('list__task', 'flex');

  // Create and attach checkbox
  let checkbox = document.createElement('span');
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('click', handleToggleCheckbox);
  newList.appendChild(checkbox);

  // Create and attach task text
  let task = document.createElement('span');
  task.classList.add('task__description');
  task.textContent = newTaskText;
  newList.appendChild(task);

  // Create and attach delete button
  let deleteBtn = document.createElement('img');
  deleteBtn.setAttribute('src', './images/icon-cross.svg');
  deleteBtn.setAttribute('alt', 'delete task');
  deleteBtn.classList.add('delete__task-btn');
  deleteBtn.addEventListener('click', handleDeleteTask);
  newList.appendChild(deleteBtn);

  // Add to DOM
  taskLists.appendChild(newList);
  taskInput.value = '';


  updateTaskCount();
}

// Attach to Add button
let addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', handleAddTask);


// Sort logic

let filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // 1️⃣ Remove highlight from ALL buttons
        filterBtns.forEach(b => b.classList.remove('highlight'));
        // 2️⃣ Add highlight to the specific clicked button
        e.target.classList.add('highlight');
    })
})



filterBtns.forEach((btn) => {
  btn.addEventListener("click", ()=>{
    let filter = btn.getAttribute("data-id")
    // console.log(filter)
    
    let taskList = document.querySelectorAll('.list__task');
    
    // Now use if statements to determine which lists to show/hide based on filter
        taskList.forEach((task)=>{
          if (filter === "all") {
             task.style.display = "flex"; // show everything
          } else if( filter === "active"){
              // console.log("active lists will show")
              if (task.classList.contains('completed')) {
                task.style.display = "none"; // hide completed ones
             } else {
                task.style.display = "flex"; // show active ones
              }
          } else if(filter === "completed") {
            if (!task.classList.contains('completed')) {
              task.style.display = "none"
            } else {
              task.style.display = "flex"
            }
          }
        })
    })
})

// Logic for clear completed button
let clearBtn = document.querySelector(".clear-completed-btn")
clearBtn.addEventListener("click", clearCompletedTasks)

function clearCompletedTasks() {
  taskLists.forEach((task)=>{
    if (task.classList.contains('completed')) {
              task.style.display = "none"
              filterBtns.forEach(
                (btn)=>{
                  btn.classList.remove("highlight")
                  let newBtn = document.getElementById('active'); //selects button with data-id of active
                  newBtn.classList.add("highlight")
                }
              )
            } else {
              task.style.display = "flex"
            }
  })
}

// Write logic for task count










