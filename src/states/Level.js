import SuperSnake from 'objects/SuperSnake';
import SnakeKiller from 'objects/SnakeKiller';

class Level extends Phaser.State {
    
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0, 0, 5000, 5000);
        this.game.add.tileSprite(0,0, 5000, 5000, 'grid').alpha = 0.4;
        this.snake = new SuperSnake(this.game);
        this.enemy = new SnakeKiller(this.game);
    }

    collision() {
        console.log('coll')
        this.snake.die();
    }

    update() {
        this.snake.update();
        this.enemy.update();

        this.game.physics.arcade.collide(this.snake.sprite, this.enemy.sprite, this.collision, null, this);
    }
}
    
export default Level;
    