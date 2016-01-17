$(document).ready(function() {

	Myo.connect('com.myojs.main');

	var audio1 = new Audio('javascripts/kick.wav');
	var audio2 = new Audio('javascripts/hihat.wav');
	var audio3 = new Audio('javascripts/snare.wav');

	
	var loop3 = new Audio('javascripts/loop3.mp3');
	var loop2 = new Audio('javascripts/loop2.mp3');
	var loop1 = new Audio('javascripts/loop1.mp3');
	var currentLoop; 

	$('#playLoop').on('click', function() {
		console.log('yes');
		currentLoop.play();
	});

	$.ajax({
		url: 'http://192.168.1.148/',
		dataType: 'json',
		success: function (data) {
			if (data["0"] > 800) {
				console.log('greater than 800');
				currentLoop = loop3; 
			}

			if (data["0"] > 400 ) {
				console.log('greater than 400');
				currentLoop = loop2;

			}

			else {
				console.log('less than 400')
				currentLoop = loop1;
			}
		}
	});



	Myo.on('fist', function() {
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