class Preload extends Phaser.State {

	preload() {
		this.game.load.image('snake_01', 'assets/snake_01.png');
		this.game.load.image('grid', 'assets/debug-grid-1920x1920.png');
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
	}

	create() {
		this.game.state.start("MainMenu");
	}

}

export default Preload;
