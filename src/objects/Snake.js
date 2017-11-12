
class Snake {
	constructor(game){
		this.game = game;
		this.speed = 1;
    }

	update() {
         this.move();
        this.updateDirection();
	}

    updateDirection() {
    }

    move() {
        switch (this.direction) {
            case 'NORTH':
                this.sprite.y -= 1 * this.speed;
                break;
            case 'EAST':
                this.sprite.x += 1 * this.speed;
                break;
            case 'SOUTH':
                this.sprite.y += 1 * this.speed;
                break;
            case 'WEST':
                this.sprite.x -= 1 * this.speed;
                break;
        }
    }
}

export default Snake;