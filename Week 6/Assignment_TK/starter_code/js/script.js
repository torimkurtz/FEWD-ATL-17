// get city options
// define dropdown elements
// change background upon selection
// change background to selected city
// click between options to change background

$(document).ready(function() {

var cities = ["nyc", "sf", "la", "atx", "syd"];
cities.forEach(function(e) {
  $("#city-type").append("<option value=" + e + ">" + "</option>");
});



$("#city-type").change(function() {
  var chosenCity = $(this).val();
  
		if (chosenCity === "nyc"){
			$('body').addClass('nyc');
		}else if(chosenCity === "sf"){
			$('body').addClass('sf');
		}else if(chosenCity === "la"){
			$('body').addClass('la');
		}else if(chosenCity === "atx"){
			$('body').addClass('austin');
		}else if(chosenCity === "syd"){
			$('body').addClass('sydney');
		}
})  

});

// jQuery

// var cityArr = ["NYC", "SF", "LA", "ATX", "SYD"]

// $.each(cityArr, function(index, value) {
	// console.log(value);
// 	$('select').append('<option>' + value + '</option>')


// Javascript

// for(var i =0; i < cityArr.length; i++) {
	// $('select').append('<option>'+ cityArr[i] + '</option');
// }