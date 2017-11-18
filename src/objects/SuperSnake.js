import Snake from './Snake';

class SuperSnake extends Snake {
  constructor(game) {
    super(game);
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'snake_01');
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.game.camera.follow(this.sprite);
    this.speed = 5;
  }

  update() {
    this.move();
    this.updateDirection();
  }

  die() {
    this.direction = 'NONE';
  }

  updateDirection() {
    if (this.upKey.isDown) {
      this.direction = 'NORTH';
    } else if (this.downKey.isDown) {
      this.direction = 'SOUTH';
    } else if (this.leftKey.isDown) {
      this.direction = 'WEST';
    } else if (this.rightKey.isDown) {
      this.direction = 'EAST';
    } else if (this.spaceKey.isDown) {
      this.direction = 'STOP';
    }
  }
}

export default SuperSnake;
