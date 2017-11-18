class MainMenu extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = '#000000';
    this.game.state.start('Level');
  }
}

export default MainMenu;
