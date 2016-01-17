$(document).ready(function() {

	Myo.connect('com.myojs.main');

	var audio1 = new Audio('javascripts/clap.wav');
	var audio2 = new Audio('javascripts/hihat.wav');
	var audio3 = new Audio('javascripts/snare.wav')

	Myo.on('fist', function(){
		audio3.play();
		$('#bass').css("display", "block");
		$('#pad1').css("background-color", "red");
		setTimeout(function() {
			$('#pad1').css("background-color", "white")

		}, 600)
	}, function() {

	});
	Myo.on('wave_in', function() {
		
	})

	Myo.on('wave_out', function() {
		audio2.play();
		$('#pad2').css("background-color", "blue");
		setTimeout(function() {
			$('#pad2').css("background-color", "white")

		}, 600)
	})
	Myo.on('fingers_spread', function(){
		audio1.play()
		$('#pad3').css("background-color", "green");
		setTimeout(function() {
			$('#pad3').css("background-color", "white")

		}, 600)
	});



});