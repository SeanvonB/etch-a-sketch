// Global variables
const canvas = document.querySelector("#canvas");
const banner = document.querySelector("#banner");
const base = document.querySelector("#base");
const reset = document.querySelector("#reset");
const slider = document.querySelector("#input-slider");
const label = document.querySelector("#slider-label");
let currentSize = 16;

// Function for listeners to update cell color
function draw(e) {
	//Hopefully prevent unwanted default actions on mobile
	e.preventDefault();

	// Update color of THIS
	this.style.background = "#555";

	// Create array that contains all canvas cells
	let siblings = Array.from(this.parentNode.children);

	// Find index of THIS within array of its siblings
	// Then update color of cell one row above
	let index = siblings.indexOf(this);
	if (siblings[index - currentSize]) {
		siblings[index - currentSize].style.background = "#999";
	}
}

// Function for listeners to update cell color by touch
// This essentially mimics `mouseover` for touch control
function drawTouch(e) {
	// Hopefully prevent unwanted actions on mobile
	e.preventDefault();

	// Use `touches` data on `canvas` to determine 'touchmove' path
	let touch = e.touches[0];
	let cell = document.elementFromPoint(touch.clientX, touch.clientY);

	// Then do draw() but modified to be originate from canvas
	if (cell && cell.classList.contains("cell")) {
		cell.style.background = "#555";

		// Create array that contains all canvas cells
		let siblings = Array.from(cell.parentNode.children);

		// Find index of cell within array of its siblings
		// Then update color of cell one row above
		let index = siblings.indexOf(cell);
		if (siblings[index - currentSize]) {
			siblings[index - currentSize].style.background = "#999";
		}
	}
}

// Function to switch vw and vh according to orientation
function checkRotation() {
	if (window.innerHeight < window.innerWidth) {
		canvas.style.width = "65vh";
		canvas.style.height = "65vh";
		banner.style.width = "65vh";
		base.style.width = "65vh";
	} else {
		canvas.style.width = "65vw";
		canvas.style.height = "65vw";
		banner.style.width = "65vw";
		base.style.width = "65vw";
	}
}

// Function to populate canvas with cells
function createCanvas(size = currentSize) {
	// Confirm screen orientation
	checkRotation();

	// Clear prexisting canvas
	canvas.textContent = "";

	for (let i = 0; i < size * size; i++) {
		let div = document.createElement("div");
		div.classList.add("cell");

		// Use size to set dynamic dimensions
		div.style.width = `${100 / size}%`;
		div.style.height = `${100 / size}%`;

		// Add listeners
		div.addEventListener("mouseover", draw);

		canvas.appendChild(div);
	}
}

// Reset slider on refresh
slider.value = "16";

// Connect label, size slider, and canvas
label.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = function () {
	label.textContent = `${this.value} x ${this.value}`;
	currentSize = this.value;
	createCanvas(currentSize);
};

// Connect reset button and canvas
reset.onclick = function () {
	createCanvas(currentSize);
};

// Listen for touch interaction with canvas
canvas.addEventListener("touchmove", drawTouch);

// Listen for orientation changes and update vh/wh
window.addEventListener("resize", checkRotation);

// Create initial canvas
createCanvas();
