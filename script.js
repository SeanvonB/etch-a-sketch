const canvas = document.querySelector("#canvas");

function drawBasic() {
	this.style.background = "#555";
}

// Populate canvas with tiles
function createCanvas(size = 16, style = drawBasic) {
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

// Create initial canvas
createCanvas();
