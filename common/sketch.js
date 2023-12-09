function setup() {
	createCanvas(400, 400)
	noStroke()
	flex({ container: { padding: "20px" } })
}

function draw() {
	background("#00647f")
	circle(mouseX, mouseY, 50)
}
