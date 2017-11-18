import Snake from './Snake';

class SnakeKiller extends Snake {
  constructor(game, snake) {
    super(game);
    this.sprite = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'snake_01');
    this.sprite.enableBody = true;
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.speed = 4.7;
    this.snake = snake;
  }

  update() {
    this.move();
    this.updateDirection();
  }

  angleToHero() {
    return Phaser.Point.angle(new Phaser.Point(this.x, this.y), new Phaser.Point(this.snake.x, this.snake.y));
  }

  updateDirection() {
    const angleToHero = this.angleToHero();

    if (this.prevAngleToHero && Math.abs(this.prevAngleToHero - angleToHero) < 0.1) {
      return;
    }

    this.prevAngleToHero = angleToHero;

    if (this.game.rnd.integer() % 2 == 0) {
      if (angleToHero > 0) {
        this.direction = 'NORTH';
      } else {
        this.direction = 'SOUTH';
      }
    } else if (Math.abs(angleToHero) > Math.PI / 2) {
      this.direction = 'EAST';
    } else {
      this.direction = 'WEST';
    }
  }
}

export default SnakeKiller;
