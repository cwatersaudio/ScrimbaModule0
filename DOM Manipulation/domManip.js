var newHeading = document.getElementById("new_heading");
let divTarget = document.getElementById("Main_Box");

newHeading.innerHTML = "Did this work?";
let newButton = document.createElement("button");
newButton.innerHTML = "New Button!";
newButton.setAttribute("id","new-button");
divTarget.append(newButton);
