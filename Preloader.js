Game.Preloader = function(game){

	this.preloadBar = null;
}

Game.Preloader.prototype = {

	preload:function(){

		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		
		this.time.advancedTiming = true;

		this.load.setPreloadSprite(this.preloadBar);

		//LOAD ALL ASSETS

		//level
		/*this.load.tilemap('map1', 'assets/MAP/Mundo.json');
		this.load.tilemap('BoLimits', 'assets/MAP/LimitesBo.json');
		this.load.tilemap('plataformas', 'assets/MAP/PlataformasEspeciales.json');
		this.load.tilemap('pinchos', 'assets/MAP/Pinchos.json');*/
		this.load.tilemap('mundo', 'assets/MAP/Mundo.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('BoLimits', 'assets/MAP/LimitesBo.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('plataformas', 'assets/MAP/PlataformasEspeciales.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('spikes', 'assets/MAP/Pinchos.json', null, Phaser.Tilemap.TILED_JSON);

		this.load.image('tiles', 'assets/tileset.png');
		this.load.image ('tilesPinchos', 'assets/spikes.png');


		//main menu
		this.load.image('title', 'assets/title.png');

		//botones
		this.load.image('buttonMenu', 'assets/buttonMEnu.png');
		this.load.image('buttonResume', 'assets/buttonResume.png');
		this.load.image('buttonPlay', 'assets/buttonPlay.png');

		//GameOver
		this.load.image('gameover', 'assets/gameover.png');	
		this.load.image('win', 'assets/win.png');	

		//Esto habra que modificarlo para las animaciones
		this.load.image('eye', 'assets/EyeBlue.png');
		this.load.image('bo', 'assets/Bo.png');

	},

	create:function(){

		this.state.start('MainMenu');
	}
}