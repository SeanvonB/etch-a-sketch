// Globals
const canvas = document.querySelector("#canvas");
const banner = document.querySelector("#banner");
const base = document.querySelector("#base");
const reset = document.querySelector("#reset");
const slider = document.querySelector("#input-slider");
const label = document.querySelector("#slider-label");
let currentSize = 16;

// Update cell color according to curser input
function draw(e) {
	//Hopefully prevent unwanted default actions on mobile?
	e.preventDefault();

	// Update color of cell
	this.style.background = "#555";

	// Create array that contains all canvas cells
	let siblings = Array.from(this.parentNode.children);

	// Find index of cell within array of its siblings
	// Then update color of sibling one row above
	let index = siblings.indexOf(this);
	if (siblings[index - currentSize]) {
		siblings[index - currentSize].style.background = "#999";
	}
}

// Update cell color according to touch input
// This essentially mimics `mouseover` for touch control
function drawTouch(e) {
	// Hopefully prevent unwanted actions on mobile?
	e.preventDefault();

	// Use `touches` data on `canvas` to determine 'touchmove' path
	let touch = e.touches[0];
	let cell = document.elementFromPoint(touch.clientX, touch.clientY);

	// Then mimic draw() but modified to originate from canvas
	if (cell && cell.classList.contains("cell")) {
		cell.style.background = "#555";

		let siblings = Array.from(cell.parentNode.children);
		let index = siblings.indexOf(cell);

		if (siblings[index - currentSize]) {
			siblings[index - currentSize].style.background = "#999";
		}
	}
}

// Populate new canvas of currentSize with blank cells
function createCanvas(size = currentSize) {
	canvas.textContent = "";
	for (let i = 0; i < size * size; i++) {
		let div = document.createElement("div");
		div.classList.add("cell");

		// Use size to set dynamic dimensions
		// `paddingTop` scales with width, maintaining aspect ratio
		div.style.width = `${100 / size}%`;
		div.style.paddingTop = `${100 / size}%`;

		div.addEventListener("mouseover", draw);
		canvas.appendChild(div);
	}
}

// AddEventListeners
canvas.addEventListener("touchmove", drawTouch);
reset.onclick = function () {
	createCanvas(currentSize);
};
slider.oninput = function () {
	label.textContent = `${this.value}x${this.value}`;
	currentSize = this.value;
	createCanvas(currentSize);
};

// Initial state
slider.value = "16";
label.textContent = `${slider.value}x${slider.value}`;
createCanvas();
