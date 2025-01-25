let container = document.getElementById("container");
let resetButton = document.getElementById("reset");
let gridSizeButton = document.getElementById("grid_size");

function changeDivColor(div, color) {
  div.style.background = color;
}

function resetGridColor() {
  const elements = document.querySelectorAll(".grid");
  elements.forEach((div) => {
    div.style.background = "white";
  });
}

function createGrid(number) {
  container.innerHTML = "";

  for (let i = 0; i < number * number; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
  }

  const elements = document.querySelectorAll(".grid");

  elements.forEach((div) => {
    div.style.flex = `1 0 calc(100% / ${number})`; // Dynamically set width
    div.style.aspectRatio = "1 / 1"; // Maintain square shape
  });

  elements.forEach((div) => {
    div.addEventListener("mouseover", () => changeDivColor(div, "red"));
  });
}

function handleGridSizeInput() {
  let input = prompt("Enter the grid size (e.g., 16 for 16x16):");
  let size = parseInt(input);

  if (isNaN(size) || size < 0 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(size);
}

resetButton.addEventListener("click", () => resetGridColor());
gridSizeButton.addEventListener("click", () => handleGridSizeInput());

createGrid(16);
