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
//     Key Variables
// =====================

// Player Health
var p1Health = $('#p1Health'); 
var p2Health = $('#p2Health'); 
var p3Health = $('#p3Health'); 
var p4Health = $('#p4Health'); 

// Corresponding Button to Each Bad Guy Ship
var attackCmd1 = $('#attack1')
var attackCmd2 = $('#attack2')
var attackCmd3 = $('#attack3')
var attackCmd4 = $('#attack4')

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
//    Instances
// ================

// Wraith Instances

var wraith1 = new Player ({
 name: 'Wraith 1',
 unit: $('#g1')
});

var wraith2 = new Player ({
 name: 'Wraith 2',
 unit: $('#g2')
});

var wraith3 = new Player ({
 name: 'Wraith 3',
 unit: $('#g3') 
});

var wraith4 = new Player ({
 name: 'Wraith 4',
 unit: $('#g4')
});

// Alien Instances

var blkmuk1 = new Alien ({
	name: 'Black Muk 1',
 	unit: $('.bship1')
});

var blkmuk2 = new Alien ({
	name: 'Black Muk 2',
 	unit: $('.bship2')
});

var blkmuk3 = new Alien ({
	name: 'Black Muk 3',
 	unit: $('.bship3')
});

var blkmuk4 = new Alien ({
	name: 'Black Muk 4',
 	unit: $('.bship4')
});

// =============================
//  Array Of Aliens and Wraiths
// =============================

var arrWraiths = [wraith1, wraith2, wraith3, wraith4];
var arrAliens = [blkmuk1, blkmuk2, blkmuk3, blkmuk4];

// Function to randomly shuffle array for who to attack

var randomAlien = function(){
 	return _.shuffle(arrAliens);
};

var selectAlien = function(){
	return randomAlien()[0];
}

var randomWraith = function(){
	return _.shuffle(arrWraiths);
}

var selectWraith = function(){
	return randomWraith()[0];
}

// ================
//     Actions
// ================

// Attack 

// A random unit attacked a random unit
attackCmd1.on('click', function (){
		selectWraith().attack(selectAlien());
});

// Function of Attacking
var underAttack =  function (shooter,victim){

	// Dealing Damage
	if (shooter.health > 0){
		damageDealt = _.random(20,35)
	} else {
		damageDealt = 0;
		console.log(shooter.name + " is dead!")
	};

	// Reflecting the Damage
	victim.health -= damageDealt;

	// Retaliation!
	if (victim instanceof Alien){
		console.log(shooter.name + ' fire cannons at ' + victim.name);


			if (victim.health > 0){
				underAttack(victim, shooter);
				console.log(victim.name + ' returns fire at ' + shooter.name);
				console.log(shooter.name + "'s health is now " + shooter.health);
				console.log(victim.name + "'s health is now " + victim.health);
			} else {
				console.log(victim.name + " was just shot down!")
			}

			if (shooter.health <= 0){
				console.log(shooter.name + " was just shot down!")
			}
	


	};


};



// ========================
//  Getting to show Health
// ========================






