var doCoolStuff = function (){
	var currentClassName = document.getElementById('cool').className;
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else{
		document.getElementById('cool').className = 'cool';
	}
	
 // this changes the calss name from cool to cool red and vice versa
}


var sayMyName = function (name){
	alert ('My name is: ' +name);
}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1', s
		'seat 2', 
		'seat 3', 
		'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn = true; 
		// this refers to object car
		// changes the property of object
	},
	fly: function (){
		alert('fly');
	},
	switchCar: function (isOn){
		console.log('turn car '+isOn)
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};
