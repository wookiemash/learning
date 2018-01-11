class Ai {
	constructor(x, y, position, endLoc, blocks, walls) {
		this.x = x;
		this.y = y;
		this.pos = position;
		let pos = this.pos;
		this.end = endLoc;
		this.time = 0;
		this.iterations = 0;
		this.moves = 0;
		this.blocks = blocks;
		this.posLast = pos;
		this.posTemp = [pos+10,pos-10,pos-1,pos+1];
		this.dirPos = 0;
		this.percentage = 100/255;
		this.speed = 1;
		this.times = 20;
	}

	act() {
		this.time++;
		// set this number for how many frames you want to go by each run
		if (this.time === this.speed) {
			// set this one for how many times per frame it should run
			for (i = 0; i < this.times; i++) {
			this.update();
		}
			this.time = 0;
		}
		this.show();
	}

	update() {
		let pos = this.pos;
		this.posTemp = [pos+10,pos-10,pos-1,pos+1];
			if (this.end === pos) {
				print('total number of moves was ' + this.moves);
				this.moves = 0;
				this.updateTile();
				this.updatePos(0);
				this.previousPos = this.pos;
			} else {
				this.previousPos = this.pos;
				this.moves++;
				this.dirTemp = [];
				let posLR = pos % 10;
				if (pos < 90) {
					this.dirTemp.push(0);
				} 
				if (pos > 9) {
					this.dirTemp.push(1);
				}
				if (posLR !== 0) {
					this.dirTemp.push(2);
				} 
				if ( posLR !== 9) {
					this.dirTemp.push(3);
				}
				// chooses a tile based on there percentages
				this.chooseTile();
				//sets the next tile based on chooseTile
				this.updatePos(this.posTemp[this.dirPos]);
				// updates the percentage of the previousTile
				this.updateTile();
			}

	}
	//sub function for update
	chooseTile() {
		this.dirPos = choseTileOutside(this.blocks, this.dirTemp, this.posTemp);
		this.posLast = this.pos;
	}

	//sub function for update
	//visualizing the ai on the screen
	updatePos(pos) {
		this.pos = pos;
		this.x = (this.pos % 10) * 50 + 15;
		this.y = Math.floor(this.pos/10)*50+15;
	}

	//sub function for update
		//fix the update value to work only if the worth is greater and
		// and dont let it decrease itself.
	updateTile() {
		let valueCurrent = this.blocks[this.pos].worth;
		let lastTriangle = this.blocks[this.posLast].directions[this.dirPos];
		let valueLast = this.blocks[this.posLast].worth;
		if (valueLast < valueCurrent) {
			this.blocks[this.posLast].directions[this.dirPos] = constrain(lastTriangle+this.percentage*valueCurrent, 0, valueCurrent*.9)-1;				
			let newWorth = max(this.blocks[this.posLast].directions[this.dirPos]);
			this.blocks[this.posLast].worth = newWorth;	
		}
	
	}

	show() {
		fill(0);
		rect(this.x,this.y,20,20);
	}
}

//outside function for using for loops
function choseTileOutside(blocks, dirTemp, posTemp) {
	let total = 0;
	let values = [];
	let i = 0;
	let canAdd = true;
	for (dir of dirTemp) {
		let currentBlock = blocks[posTemp[dir]];
		if(currentBlock.isWall == false) {
			values[i] = currentBlock.worth;
			total += values[i];
			i++;
		}
	}
	let maxValue = max(values);
	if (maxValue == 0) {
		while(true) {
			let rT = random(dirTemp);
			if (blocks[posTemp[rT]].isWall === false) {
				return rT;
			}
		}
		
	} else {

		i = 0;
		let randNum = random(total);
		total = 0;
		for (value of values) {
			total+= value;
			if (value === maxValue) {
				return dirTemp[i];
			}
			i++;
		}		
	}

}