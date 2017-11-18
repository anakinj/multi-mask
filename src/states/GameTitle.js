class GameTitle extends Phaser.State {
  startGame() {
    this.game.state.start('MainMenu');
  }
}

export default GameTitle;
