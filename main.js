// JavaScript Document
//I store a reference to the button in the constant  addButton, using the getElementById
const btnAdd = document.getElementById("add");

//I create a function that will add Goals and two button
function addGoals(event) {
  event.preventDefault();
  //target the main element, i will create new buttons inside main element
  let secondSection = document.querySelector("main > section");
  let myMain = document.querySelector("main");

  //create h2 element to show user goals
  let newDiv = document.createElement("div");
  newDiv.id = "div-id";

  //create two buttons for delete or completed goal
  let btnCompleted = document.createElement("button");
  btnCompleted.id = "completedG";
  btnCompleted.innerHTML = "Completed Goal";

  let btnDelete = document.createElement("button");
  btnDelete.id = "deleteG";
  btnDelete.innerHTML = "Delete Goal";

  //insert user goal in the label element
  let goalMessage = document.getElementById("myInput").value;
  let labelGoals = document.createElement("label");
  if (goalMessage === "") {
    return alert("Goal must be writed!");
  } else alert("Your Goal Added in List!");
  labelGoals.innerHTML = goalMessage;

  //append the new div to the main element and label and buttons to the div element
  secondSection.appendChild(newDiv);
  newDiv.appendChild(labelGoals);
  newDiv.appendChild(btnDelete);
  newDiv.appendChild(btnCompleted);

  //event that happen when button Complete clicked
  btnCompleted.onclick = function () {
    alert("Congratulations! The goal is achieved!");
    labelGoals.style.textDecoration = "line-through";
    btnCompleted.style.visibility = "hidden";
    myMain.appendChild(newDiv);
  };

  //event that happen when button Delete clicked
  btnDelete.onclick = function () {
    alert(" The goal is deleted!");
    newDiv.removeChild(labelGoals);
    newDiv.removeChild(btnCompleted);
    newDiv.removeChild(btnDelete);
  };
}

// register the event handler, because we want two functions to be triggered on the same element and the same event, use addEventListener
btnAdd.addEventListener("click", addGoals);
