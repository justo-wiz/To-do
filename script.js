const inputBox = document.getElementById("input-box"); //declaring input box
const listContainer = document.getElementById("list-container") // Declaring list container
;
function addTask(){ // add task called in the add button
    if(inputBox.value === "")
    {
    alert("Please write task")
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //code for x icon
        li.appendChild(span);
        inputBox.value = "";
    }
    saveData();
}

listContainer.addEventListener("click", function(e){ //click on list item
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){ //save data on the browser
localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){ //shows the task list stored even if browser is closed or refreshed
listContainer.innerHTML =  localStorage.getItem("data");
}
inputBox.addEventListener("keypress", function (event) { //Enter key to add input
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});
showTask(); //