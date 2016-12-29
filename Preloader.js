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

		this.load.tilemap('map1', 'assets/map1/level.csv');
		this.load.image('tileset', 'assets/tileset.png');

		//Esto habra que modificarlo para las animaciones
		this.load.image('eye', 'assets/Eye1.png');


	},

	create:function(){

		this.state.start('Level');
	}
}