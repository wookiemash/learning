class Block {
	constructor(x, y, scale, index, endLocation, isWall) {
		this.x = x;
		this.y = y;
		this.scale = scale;
		this.p1 = createVector(x, y);
		this.p2 = createVector(x+scale/2, y+scale/2);
		this.p3 = createVector(x+scale,y);
		this.directions = Array(4).fill(0);
		this.color = 255;
		this.index = index;
		if (index === endLocation) {
			this.worth = 255;
		} else {
			this.worth = 0;
		}
		if (isWall) {
			this.isWall = true;
			this.color = 0;
		} else {
			this.isWall = false;
		}
	}

	show() {
		fill(this.color);
		rect(this.p1.x, this.p1.y, this.scale, this.scale)
		let x1 = this.p1.x;
		let y1 = this.p1.y;
		let x2 = this.p2.x;
		let y2 = this.p2.y;
		let x3 = this.p3.x;
		let y3 = this.p3.y;
		//top triangle
		fill(153,255,40, this.directions[1]);			
		triangle(x1, y1, x2, y2, x3, y3);
		//bottom triangle
		fill(153,255,40, this.directions[0]);
		triangle(x1, (y1+this.scale), x2, y2, x3, (y3+this.scale));
		//right triangle
		fill(153,255,40, this.directions[3]);
		triangle(x1+this.scale, y1+this.scale, x2, y2, x3, y3);
		//left triangle
		fill(153,255,40, this.directions[2]);
		triangle(x1, y1, x2, y2, x3-this.scale, y3+this.scale);

		fill(255);
		rect(x1+this.scale/2-9, y1+this.scale/2-9, 18, 18);
		fill(153,255,40, this.worth);
		rect(x1+this.scale/2-9, y1+this.scale/2-9, 18, 18);
	}
}