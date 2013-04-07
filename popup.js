(function($) {
	$(function() {
		var $results = $('#results');
		var $word = $('.word');
		var $definition = $('#definition');
		var $examples = $('#examples');
		$results.html('Loading...');
		var url = "http://api.wordnik.com//v4/words.json/wordOfTheDay?limit=1&api_key=239d2ae96551481820006059e150d2f9e194de00fe555be59";
		$.ajax({
			url:url,
			success:function(data) {
				$results.html('');
				$('<h1>').text(data.word).appendTo($word);
				var $def = $('<p>').appendTo($definition);
				var $list = $('<ul>').appendTo($examples);
				$.each(data.definitions, function(index, value) {
					$('<p>').append($('<a>').text("- " + value.text)).appendTo($def);
				});
				$.each(data.examples, function(index, value) {
					$('<li>').append($('<p>').text(value.text)).appendTo($list);
				});
			}
		});
	});
})(jQuery);