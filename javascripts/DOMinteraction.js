var SongDisplay = (function (globalScopeSD) {
	let DOMint = Object.create(null);
	let songsContentDisplay = '';
	let songDisplayDiv = document.getElementById('songDisplay')
	let userAddedSongs = [];
	let addMusicBtn = document.getElementById('addMusicBtn')

	addMusicBtn.addEventListener('click', function() {
		DOMint.addUserSongToArray();
		toggleIsHidden();
	})

	DOMint.addUserSongToArray = function() {
		let songToAdd = {};
			songToAdd.title = document.getElementById('song-input').value;
			songToAdd.artist = document.getElementById('artist-input').value;
			songToAdd.album = document.getElementById('album-input').value;
	
		console.log("song to add?", songToAdd);
		addNewSong(cleanUpSongs, songsArray, songToAdd);
		userAddedSongs.push(songToAdd);
		console.log("user added songs array?", userAddedSongs);
	};

	DOMint.printSongsToDOM = function(songsArray) {
		console.log("songs Array?", songsArray);
		songsArray = songsArray.concat(userAddedSongs);
		for (i=0; i < songsArray.length; i++) {

			songsContentDisplay += `
				<section class="dispSong" id="${songsArray[i]}">
					<h3>${songsArray[i].title}</h3><h4>by ${songsArray[i].artist} on the album ${songsArray[i].album}
					<button class="delete">delete song</button>
				</section>
				`
			}
		songDisplayDiv.innerHTML = songsContentDisplay;
	}

	window.addEventListener("click", function() {
		if (event.target.classList.contains('delete')) {
			event.target.parentNode.parentNode.remove();
		};
	})

	function addNewSong(nextStep, songArray, newSong) {
		songArray.unshift(newSong);
		nextStep(songArray);
	}

	function deleteSong (event) {

	}

	globalScopeSD.DOMint = DOMint;
	return globalScopeSD;

})(SongDisplay || {});
