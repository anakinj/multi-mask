import Boot from 'states/Boot';
import Preload from 'states/Preload';
import GameTitle from 'states/GameTitle';
import MainMenu from 'states/MainMenu';
import Main from 'states/Main';
import GameOver from 'states/GameOver';
import Level from 'states/Level';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS);
		//super(800, 600, Phaser.CANVAS);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Main', Main, false);
		this.state.add('GameOver', GameOver, false);
		this.state.add('MainMenu', MainMenu, false);
		this.state.add('Level', Level, false);
		this.state.start('Boot');
	}

}

new Game();