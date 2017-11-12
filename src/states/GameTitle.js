class GameTitle extends Phaser.State {

	create() {

	}

	startGame() {
		this.game.state.start("MainMenu");
	}

}

export default GameTitle;
