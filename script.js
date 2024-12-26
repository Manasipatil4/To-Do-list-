function AddTask() {
  const inputBox = document.getElementById("input-box");
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const checkmark = document.createElement("span");
  checkmark.classList.add("circle"); 
  checkmark.innerText = ""; 


  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  li.appendChild(checkmark);
  li.appendChild(taskContent);


  const listContainer = document.getElementById("list-container");
  listContainer.appendChild(li);
  inputBox.value = "";
  checkmark.addEventListener("click", function () {
    listContainer.removeChild(li);
  });
}
