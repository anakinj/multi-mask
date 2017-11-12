import Snake from './Snake';

class SnakeKiller extends Snake {
    constructor(game) {
        super(game);
        this.sprite = this.game.add.sprite(this.game.world.centerX+100, this.game.world.centerY+100, 'snake_01');
        this.sprite.enableBody = true;
		this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.collideWorldBounds = true;
		this.speed = 5;
    }

	update() {
        this.move();
        this.updateDirection();
    }
    
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateDirection() {
        if(this.getRandomIntInclusive(1, 4) != 4) {
            return
        };

        if ( this.getRandomIntInclusive(1, 4) == 1) {
            this.direction = 'NORTH';
        }
        else if ( this.getRandomIntInclusive(1, 4) == 2) {
            this.direction = 'SOUTH';
        }
        else if ( this.getRandomIntInclusive(1, 4) == 3) {
            this.direction = 'WEST';
        }
        else if ( this.getRandomIntInclusive(1, 4) == 4) {
            this.direction = 'EAST';
        }
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

export default SnakeKiller;