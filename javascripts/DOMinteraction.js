var SongDisplay = (function (globalScopeSD) {
	let DOMint = Object.create(null);
	let songsContentDisplay = '';
	let $songDisplayDiv = $('#songDisplay')
	let userAddedSongs = [];
	let $addMusicBtn = $('#addMusicBtn')

	$addMusicBtn.click( function() {
		DOMint.addUserSongToArray();
		toggleIsHidden();
	});

	DOMint.addUserSongToArray = function() {
		let $songToAdd = {};
			$songToAdd.title = $('#song-input').val();
			$songToAdd.artist = $('#artist-input').val();
			$songToAdd.album = $('#album-input').val();
	
		console.log("song to add?", $songToAdd);
		addNewSong(cleanUpSongs, songsArray, $songToAdd);
		userAddedSongs.push($songToAdd);
		console.log("user added songs array?", userAddedSongs);
	};

	DOMint.printSongsToDOM = function(songsArray) {
		console.log("songs Array?", songsArray);
		songsArray = songsArray.concat(userAddedSongs);
		songsArray.forEach (function (element) {
			songsContentDisplay += `
				<section class="dispSong" id="${element}">
					<h3>${element.title}</h3><h4>by ${element.artist} on the album ${element.album}
					<button class="delete">delete song</button>
				</section>
				`
			})
			$songDisplayDiv.html(songsContentDisplay)
	};
	
	DOMint.addDeleteBtnFunctionality= function() {
		$deleteBtn = $("button.delete");
		$deleteBtn.click(function() {
			event.target.closest(".dispSong").remove();
		});
	}
			
	
	function addNewSong(nextStep, songArray, newSong) {
		songArray.unshift(newSong);
		nextStep(songArray);
	}

	$addMoreBtn = $('#moreSongs');
	$addMoreBtn.click(moreSongsBtn);

	function moreSongsBtn() {
		SongDisplay.ImportSongs.addMoreSongs(cleanUpSongs);
	}

	globalScopeSD.DOMint = DOMint;
	return globalScopeSD;

})(SongDisplay || {});
