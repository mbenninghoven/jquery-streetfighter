$(document).ready(function() {

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  		})
  .mouseleave(function() {
  	$('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    playHadouken();
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
  		{'left': '1020px'},
  			500,
  			function() {
    		$(this).hide();
    		$(this).css('left', '520px');
  		});

  })
  .mouseup(function() {
    //console.log('mouseup');
    // ryu goes back to his ready position
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();

  		});

//Having a hard time getting the x key down to function:
  	$(document).keydown(function(e) {
		if (e.keyCode == 88){
			//$('.ryu-still').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();	
		}
			})
  			.keyup(function(e){
  		if (e.keyCode == 88){
  		//$('.ryu-still').show();
  		$('.ryu-still').show();
  		$('.ryu-cool').hide();
  		}
  			});
	});
	  
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}