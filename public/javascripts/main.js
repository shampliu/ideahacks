$(document).ready(function() {
	Myo.connect('com.myojs.main');

	var audio = new Audio('javascripts/arctic.mp3');
	var audio2 = new Audio('javascripts/hihat.wav');
	var audio3 = new Audio('javascripts/snare.wav')

	Myo.on('fist', function(){
	    // audio.play();
	    this.vibrate();
	});

	Myo.on('wave_in', function() {
		audio3.play();
	})

	Myo.on('wave_out', function() {
		audio2.play();
	})



});