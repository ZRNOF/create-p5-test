import { mountFlex } from "https://cdn.jsdelivr.net/npm/p5.flex/src/p5.flex.min.mjs"

mountFlex(p5)

new p5((p) => {
	p.setup = () => {
		p.createCanvas(400, 400)
		p.noStroke()
		p.flex({ container: { padding: "20px" } })
	}

	p.draw = () => {
		p.background("#00647f")
		p.circle(p.mouseX, p.mouseY, 50)
	}
})
