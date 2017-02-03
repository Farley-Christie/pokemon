(function(){
	$('nav li').on('click', function(){
		$.getJSON('includes/getPokemon.php',{ critter : this.id}, function(data){
			console.log(data);

			$('.click-header').text(data.pokeName);
			$('.hidden').removeClass('hidden');
			$('.pokemon-large').attr('src','images/' + data.pokeImage + '.png');
			$('.content-section p').text(data.pokeDesc);
			$('.habitat-header').text(data.pokeName + "lives here!");
			$('.habitat').attr('src', 'images/' + data.bgImage + '.jpg');
		});
	});
})();