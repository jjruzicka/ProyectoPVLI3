Game.Level = function(game){};

var map;
var layer;
var eye;
var controls = {};
var playerSpeed = 200;
var jumpTimer = 0;

Game.Level.prototype = {

	create:function(){
		this.stage.backgroundColor = '#4422AA';

		this.physics.arcade.gravity.y = 1400;

		map = this.add.tilemap('map1', 16, 16);
		map.addTilesetImage('tileset');
		layer = map.createLayer(0);
		layer.resizeWorld();

		map.setCollisionBetween(701, 713);

		eye = this.add.sprite(100, 480, 'eye');
		eye.anchor.setTo(0.5, 0.5);
		//Aqui se hara la animación
		this.physics.arcade.enable(eye);
		//this.camara.follow(eye);

		controls ={
			right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
			left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
			jump: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
		};
	},

	update:function(){
		this.physics.arcade.collide(eye, layer);

		eye.body.velocity.x = 0; //Para que no se deslice

		if(controls.jump.isDown && (eye.body.onFloor())){
			eye.body.velocity.y -= 600;
		}
		
		if(controls.right.isDown){
			
			eye.body.velocity.x += playerSpeed;
		}

		if(controls.left.isDown){
			eye.body.velocity.x -= playerSpeed;
		}
	}
}