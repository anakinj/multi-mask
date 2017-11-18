import SuperSnake from 'objects/SuperSnake';
import SnakeKiller from 'objects/SnakeKiller';

class Level extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.world.setBounds(0, 0, 5000, 5000);
    this.game.add.tileSprite(0, 0, 5000, 5000, 'grid').alpha = 0.4;
    this.snake = new SuperSnake(this.game);
    this.enemy1 = new SnakeKiller(this.game, this.snake);
    this.enemy2 = new SnakeKiller(this.game, this.snake);
  }

  collision() {
    this.snake.die();
  }

  update() {
    this.snake.update();
    this.enemy1.update();
    this.enemy2.update();

    this.game.physics.arcade.collide(this.snake.sprite, this.enemy1.sprite, this.collision, null, this);
    this.game.physics.arcade.collide(this.snake.sprite, this.enemy2.sprite, this.collision, null, this);
  }
}

export default Level;
