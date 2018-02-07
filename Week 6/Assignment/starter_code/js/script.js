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

		// function selectCity(event) {
	 //   		event.preventDefault();

// 	}

// });