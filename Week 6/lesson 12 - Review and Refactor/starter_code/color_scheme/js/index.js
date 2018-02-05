// // Refactor the following code to instead use the 'this' keyword

// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }



$('li').click(function(){

	var liColor = $(this).attr('id');
	// console.log('hello');
	$('body').attr('id', liColor);
});

// $(document).ready(function(){
// 	$('li').click(function(){
// 		var liColor = $(this).html());
// 		// console.log('hello');
// 		$('body').attr('id', liColor);
// 	});
// });