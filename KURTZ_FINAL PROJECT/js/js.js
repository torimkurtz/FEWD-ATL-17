$(document).ready(function() {

	var userFeed = new Instafeed({
	get: 'user',
	userId: '2428357482',
	limit:12,
	resolution: 'standard_resolution',
	accessToken: '2428357482.1677ed0.5188b64eacaf443db5c3f8e20900b7b9',
	sortBy: 'most-recent',
	template: '<div class="col-lg-4 gallery instaimg"><a href="{{image}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});
	userFeed.run();



	$('.gallery').magnificPopup({
	  type: 'image',
	  delegate: 'a',
	  gallery:{
	    enabled:true
	  }
	});

});