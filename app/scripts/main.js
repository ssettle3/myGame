// ===========
// Menu Screen
// ===========

$('.begin').on('click', function(){
	$('.menu-container').addClass('hidden');
	$('.battle-screen').addClass('battle-screen-active');
});

// ===============
// Genereal Prompt
// ===============

$('.fight').on('click', function(){
	$('.general').addClass('hidden');
});


// ===============
//  Instructions
// ===============

$('#inst').on('click', function(){
	$('.instructions').addClass('instructions-active');
});

$('#done').on('click', function(){
	$('.instructions').removeClass('instructions-active');
});
// =====================
//   Overall Variables
// =====================

// Player Health
var p1Health = $('#p1Health'); 
var p2Health = $('#p2Health'); 
var p3Health = $('#p3Health'); 
var p4Health = $('#p4Health'); 

// Corresponding Button to Each Bad Guy Ship
attackCmd1 = $('#attack1')
attackCmd2 = $('#attack2')
attackCmd3 = $('#attack3')
attackCmd4 = $('#attack4')

// ================
//   Constructors
// ================

// Player Constructor

var Player = function (options){

	var opt = options || {};

	this.name = opt.name;
	this.health = 100;
	this.attack = function (target){
		underAttack(this, target);
	};
	this.unit = opt.unit;
};

Player.prototype.type = 'Wraith';
Player.prototype.name = 'Pilot';

// Alien Constructor

var Alien = function (details){

	var det = details || {};

	this.name = det.name;
	this.health = 100;
	this.unit = det.unit;
};

Alien.prototype.type = 'Black-Muk Adv. Fighter';
Alien.prototype.name = 'Alien Invader';

// ================
//   Instances
// ================

// Player Instances

var wraith1 = new Player ({
 name: 'Bobby',
 unit: $('#g1')
});

var wraith2 = new Player ({
 name: 'Jack',
 unit: $('#g2')
});

var wraith3 = new Player ({
 name: 'Orlando',
 unit: $('#g3') 
});

var wraith4 = new Player ({
 name: 'Mikey',
 unit: $('#g4')
});

// Alien Instances

var blkmuk1 = new Alien ({
	name: 'Xandar',
 	unit: $('#b1')
});

var blkmuk2 = new Alien ({
	name: 'Zeektik',
 	unit: $('#b2')
});

var blkmuk3 = new Alien ({
	name: 'Kryptok',
 	unit: $('#b3')
});

var blkmuk4 = new Alien ({
	name: 'Plyfox',
 	unit: $('#b4')
});

// ================
//   Actions
// ================

// Attack 

attackCmd1.on('click', function () {
  wraith1.attack(blkmuk1);
  console.log('You fired your cannons at ' + blkmuk1.name);
  console.log(blkmuk1.health);
});

attackCmd2.on('click', function () {
  wraith2.attack(blkmuk2);
  console.log('You fired your cannons at ' + blkmuk2.name);
  console.log(blkmuk2.health);
});

attackCmd3.on('click', function () {
  wraith3.attack(blkmuk3);
  console.log('You fired your cannons at ' + blkmuk3.name);
  console.log(blkmuk3.health);
});

attackCmd4.on('click', function () {
  wraith4.attack(blkmuk4);
  console.log('You fired your cannons at ' + blkmuk4.name);
  console.log(blkmuk4.health);
});


// Function of Attacking
var underAttack =  function (shooter,victim){

	// Dealing Damage
	damageDealt = _.random(5,15)

	// Reflecting the Damage
	victim.health -= damageDealt;

	// Retaliation!
	_.delay(underAttack, 500, victim, shooter);
		console.log('Your men are underfire!')
		console.log(shooter.health);




};



// ===================
// Getting to show Health
// ===================






