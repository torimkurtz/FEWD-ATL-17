$(document).ready(function() {

	$( ".box" ).hover(function(event) {
  		event.preventDefault();
  		$(this).css("background-color", "hsla(314, 0%, 0%, 0.20)");
  		}, function(){
        $(this).css("background-color", "hsla(314, 0%, 35%, 0.29)");

	});

	$( ".box2" ).hover(function(event) {
  		event.preventDefault();
  		$(this).css("background-color", "hsla(314, 0%, 0%, 0.30)");
  		}, function(){
        $(this).css("background-color", "hsla(314, 0%, 35%, 0.29)");

	});

	$( ".box3" ).hover(function(event) {
  		event.preventDefault();
  		$(this).css("background-color", "hsla(314, 0%, 0%, 0.44)");
  		}, function(){
        $(this).css("background-color", "hsla(314, 0%, 35%, 0.29)");

	});
});