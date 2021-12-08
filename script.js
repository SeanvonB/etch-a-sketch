const canvas = document.querySelector("#canvas");
const base = document.querySelector("#base");

function drawBasic() {
	this.style.background = "#555";
}

// Change vw to vh for landscape devices
function checkRotation() {
	if (window.innerHeight < window.innerWidth) {
		canvas.style.width = "65vh";
		canvas.style.height = "65vh";
		base.style.width = "65vh";
	} else {
		canvas.style.width = "65vw";
		canvas.style.height = "65vw";
		base.style.width = "65vw";
	}
}

// Populate canvas with tiles
function createCanvas(size = 16, style = drawBasic) {
	// Confirm screen orientation
	checkRotation();

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

// Listen for orientation changes and update vh/wh
window.addEventListener("resize", checkRotation);

// Create initial canvas
createCanvas();
