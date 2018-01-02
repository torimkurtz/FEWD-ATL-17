$(document).ready(function() {

	$('.readmore').click(showText);
	$('.readless').click(hideText);
	$('.learnmore').click(showThis);



	function showText(event) {
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
		$('.readmore').hide();

	}

	function hideText(event) {
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
		$('.readless').hide();

	}

	function showThis(event) {
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}


});