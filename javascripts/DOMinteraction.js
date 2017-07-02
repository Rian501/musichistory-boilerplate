// need to print to DOM the preloaded songs and also
//take in input, push to array for cleaning, and then print those to DOM also
var SongDisplay = (function (globalScopeSD) {
	let DOMint = Object.create(null);

	let addMusicBtn = document.getElementById('addMusicBtn')

	addMusicBtn.addEventListener('click', function() {
		addUserSongToArray();
		toggleIsHidden();
	})

	DOMint.addUserSongToArray = function() {
		let getSongTitleUserInput = document.getElementById('song-input').value;
		let getSongArtistUserInput = document.getElementById('artist-input').value;
		let getSongAlbumUserInput = document.getElementById('album-input').value;
		let songToAdd = `${getSongTitleUserInput} > by ${getSongArtistUserInput} on the album ${getSongAlbumUserInput}`
		console.log("song to add?", songToAdd);
		addNewSong(cleanUpSongs, songs, songToAdd);
	}


	DOMint.printSongsToDOM = function(songsArray) {
		let songsContentDisplay = '';
		let songDisplayDiv = document.getElementById('songDisplay')
		for (i=0; i < songsArray.length; i++) {

			songsContentDisplay += `
				<section class="dispSong" id="${songsArray[i]}">
				<h3>${songsArray[i].title}</h3><h4>by ${songsArray[i].artist} on the album ${songsArray[i].album}
				</section>
				`
			}
			
		songDisplayDiv.innerHTML = songsContentDisplay;
	}



	function addNewSong(nextStep, songArray, newSong) {
		songArray.unshift(newSong);
		nextStep(songArray);
	}

	globalScopeSD.DOMint = DOMint;
	return globalScopeSD;

})(SongDisplay || {});
