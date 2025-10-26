
// Check task Functionality
let checkboxes = document.querySelectorAll('.checkbox')

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
