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
var p1Health = $('#g1Health'); 
var p2Health = $('#g2Health'); 
var p3Health = $('#g3Health'); 
var p4Health = $('#g4Health'); 

// Attack Button
var attackCmd1 = $('#attack1')


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
	this.health = 125;
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
 	unit: $('#b1')
});

var blkmuk2 = new Alien ({
	name: 'Black Muk 2',
 	unit: $('#b2')
});

var blkmuk3 = new Alien ({
	name: 'Black Muk 3',
 	unit: $('#b3')
});

var blkmuk4 = new Alien ({
	name: 'Black Muk 4',
 	unit: $('#b4')
});

// =============================
//  Array Of Aliens and Wraiths
// =============================

var arrWraiths = [wraith1, wraith2, wraith3, wraith4];
var arrAliens = [blkmuk1, blkmuk2, blkmuk3, blkmuk4];

// Check for Health
var CkAliens = arrAliens.map(function(health){
	return health.health
});
var CkWraiths = arrWraiths.map(function(health){
	return health.health
});

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
		damageDealt = _.random(20,45)
	} else {
		damageDealt = 0;
		console.log(shooter.name + " is dead!")
	};

	// Reflecting the Damage
	victim.health -= damageDealt;


	//Display Health Update
	if(victim.health > 0){  
    victim.unit.find('input').val(victim.health);
	} else {
		victim.unit.find('input').val('DEAD!');
	}

	// Retaliation!
	if (victim.health > 0){
		console.log(shooter.name + ' fire cannons at ' + victim.name);
		console.log(victim.name + "'s health is now " + victim.health);

			if (victim instanceof Alien){
				underAttack(selectAlien(), selectWraith());
				
				if (victim.health <= 0){
					console.log(victim.name + " was just shot down!")
				}		
			}	
	 
	} else {

		// Ship vanishes when destroyed
		if (victim.health <= 0){
			victim.unit.css('background', 'transparent');

				//Ship taken out of array for selection
				if (victim instanceof Alien){
					
					arrAliens = arrAliens.filter(function(health){
					return health.health > 0;
					});
				
				} else {

					arrWraiths = arrWraiths.filter(function(health){
						return health.health > 0;
					});
				
				}

		if (arrAliens.length === 0){
			$('.outer-container').addClass('hidden')
			$('.gen-congrat').addClass('on-win')
		
		} else {

			if(arrWraiths.length === 0){
				$('.outer-container').addClass('hidden')
				$('.loose-screen').addClass('on-loose')
			}

		}



		}
	
	} 

};









