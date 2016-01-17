 window_Height = window.innerHeight;
    window_Width = window.innerWidth;

function prep(num) {
    var ind = "#image" + num; 
    console.log(ind);
    image_Element = $(ind);
    image_Height = image_Element.height();
    image_Width = image_Element.width();
    

    
    var availSpace_V = window_Height - image_Height;
    var availSpace_H = window_Width - image_Width;
    console.log(availSpace_H);
    
    var randNum_V = Math.round(Math.random() * availSpace_V);
    var randNum_H = Math.round(Math.random() * availSpace_H);


    image_Element.css({
        'top' : randNum_V + "px",
        'left' : randNum_H + "px",
        'opacity' : '1.0'
    });
    
    setTimeout(function() {
        image_Element.css('opacity', '0.0');
    }, 800); 
    
}
$(document).ready(function() {

	Myo.connect('com.myojs.main');
    
    //Drum Sounds
   
	var audio1_1 = new Audio('javascripts/clap.wav');
	var audio1_2 = new Audio('javascripts/hihat.wav');
	var audio1_3 = new Audio('javascripts/snare.wav');
    
     var currentclass; 

	  var class1 = {
	  	"one" : audio1_1,
	  	"two" : audio1_2,
	  	"three" : audio1_3
	  }
      
    //Piano Notes
    
    var audio2_1 = new Audio('javascripts/C Piano Note.wav');
    var audio2_2 = new Audio('javascripts/D Piano Note.wav');
    var audio2_3 = new Audio('javascripts/E Piano Note.wav');
    var audio2_4 = new Audio('javascripts/F Piano Note.wav');
    var audio2_5 = new Audio('javascripts/G Piano Note.wav');
        
    var class2 = {
        "one" : audio2_1,
        "two" : audio2_2,
        "three" : audio2_3,
        "four" : audio2_4,
        "five" : audio2_5,    
    }
    
    var audio3_1 = new Audio('javascripts/Cello C.wav');
    var audio3_2 = new Audio('javascripts/Cello D.wav');
    var audio3_3 = new Audio('javascripts/Cello E.wav');
    var audio3_4 = new Audio('javascripts/Cello F.wav');
    var audio3_5 = new Audio('javascripts/Cello G.wav');
    
    var class3 = {
        "one" : audio3_1,
        "two" : audio3_2,
        "three" : audio3_3,
        "four" : audio3_4,
        "five" : audio3_5
    }
    
	Myo.on('fist', function(){
        prep(1);
		$('#bass').css("display", "block");
		$('#pad1').css("background-color", "red");
		setTimeout(function() {
			$('#pad1').css("background-color", "white")
            
		}, 600)
        
	}, function() {

	});

	Myo.on('wave_out', function() {
        prep(2);
		$('#pad2').css("background-color", "blue");
		setTimeout(function() {
			$('#pad2').css("background-color", "white")

		}, 600)
	})
    
	Myo.on('fingers_spread', function(){
        prep(3);
		$('#pad3').css("background-color", "green");
		setTimeout(function() {
			$('#pad3').css("background-color", "white")

		}, 600)
	});
    
    Myo.on('wave_in', function() {
        prep(4);
		$('#pad2').css("background-color", "yellow");
		setTimeout(function() {
			$('#pad2').css("background-color", "white")

		}, 600)
	})
    
    Myo.on('double_tap', function() {
        prep(5);
		currentclass["five"].play();
		$('#pad2').css("background-color", "yellow");
		setTimeout(function() {
			$('#pad2').css("background-color", "white")

		}, 600)
	})


});