var timer = null;
var countdownNumber = 10;

var changeState = function(state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;

	// countdown
	if (state == 2){
		timer = setInterval(function(){
    		countdownNumber = countdownNumber - 1;
    		document.getElementById('countdown').innerHTML = countdownNumber;
    		if (countdownNumber <= 0) {
    			changeState(3);
    		}
		}, 1000);
	
	// see if it is success or failure
	} else if (state ==3) {
		var success = setTimeout(function()
		{
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber: ', randomNumber)
			// success
			if (randomNumber > 5) {
				changeState(4);
			} else {
				changeState(5); // OH NO
			}

		}, 2000);
	}
}

