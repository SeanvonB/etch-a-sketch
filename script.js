const canvas = document.querySelector("#canvas");
const banner = document.querySelector("#banner");
const base = document.querySelector("#base");
const reset = document.querySelector("#reset");
const slider = document.querySelector("#input-slider");
const label = document.querySelector("#slider-label");

// Create global variables
let currentSize = 16;
let currentStyle = drawBasic;

function drawBasic() {
	this.style.background = "#555";
}

// Change vw to vh for landscape devices
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

// Populate canvas with tiles
function createCanvas(size = 16, style = drawBasic) {
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

		// Add listener
		div.addEventListener("mouseover", style);

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
	createCanvas(currentSize, currentStyle);
};

// Connect reset button and canvas
reset.onclick = function () {
	createCanvas(currentSize, currentStyle);
};

// Listen for orientation changes and update vh/wh
window.addEventListener("resize", checkRotation);

// Create initial canvas
createCanvas();
