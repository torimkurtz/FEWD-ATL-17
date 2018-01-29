$(document).ready(function(){




$('form').submit(addCity);

	function addCity(event) {
   		event.preventDefault();


   		var city = $('#city-type').val();




 	if (city === 'New York'|| city ===  'NYC'|| city === 'New York City'|| city ===  'new york'|| city ===  'nyc'|| city === 'new york city') {
 		$('body').removeClass('default_img').addClass('nyc');

  		} else if (city === 'San Francisco' || city ===  'SF' || city ===  'San Fran'  || city ===  'san francisco' || city === 'sf'|| city === 'san fran') {
  			$('body').removeClass('default_img').addClass('sf');

  		} else if (city === 'Los Angeles'|| city === 'LA'|| city ===  'LAX'|| city ===  'los angeles'|| city === 'la'|| city === 'lax') {
 			$('body').removeClass('default_img').addClass('la');

		  } else if (city === 'Austin'|| city ===  'ATX'|| city ===  'austin'|| city === 'atx') {
  			$('body').removeClass('default_img').addClass('austin');

  		} else if (city === 'Sydney'|| city ===  'SYD'|| city ===  'sydney'|| city === 'syd') {
  			$('body').removeClass('default_img').addClass('sydney');

      } else if (city === 'Chicago'|| city === 'CHI'|| city === 'chicago'|| city === 'chi') {
  			$('body').removeClass('default_img').addClass('chicago');

		}

    }


  $('#newEntry').val('');

  });
