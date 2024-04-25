let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let duedate = document.getElementById("duedate");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");




form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();   //inovking the form validation is it sucess or a failure
})




let formValidation = () => {
    if (textInput.value == "") {
        console.log("Failure")
        msg.innerHTML = "Task cannot be blank";
        duedate.innerHTML = "Please fill date";
    }
    else {
        console.log("sucess")
        msg.innerHTML = "";
        duedate.innerHTML = "";

        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "modal")

        })
    }
}
let data = {}

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;


    console.log(data);

    createTasks();
}

let createTasks = () => {
    tasks.innerHTML += ` <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
        <i onclick="deleteTask(this)" class="fa-solid fa-trash"></i>
    </span>
</div>`
    resetForm();

}
let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";


}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();

}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
    selectedTask.remove();
}