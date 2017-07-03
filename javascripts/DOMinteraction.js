// need to print to DOM the preloaded songs and also
//take in input, push to array for cleaning, and then print those to DOM also
var SongDisplay = (function (globalScopeSD) {
	let DOMint = Object.create(null);

	let addMusicBtn = document.getElementById('addMusicBtn')

	addMusicBtn.addEventListener('click', function() {
		DOMint.addUserSongToArray();
		toggleIsHidden();
	})

	DOMint.addUserSongToArray = function() {
		let userAddedSongs = [];
		let getSongTitleUserInput = document.getElementById('song-input').value;
		let getSongArtistUserInput = document.getElementById('artist-input').value;
		let getSongAlbumUserInput = document.getElementById('album-input').value;
		let songToAdd = {};
			songToAdd.title = getSongTitleUserInput;
			songToAdd.artist = getSongArtistUserInput;
			songToAdd.album = getSongAlbumUserInput;
	
		console.log("song to add?", songToAdd);
		addNewSong(cleanUpSongs, songsArray, songToAdd);
		userAddedSongs.push(songToAdd);
		console.log("user added songs array?", userAddedSongs);
	};

	let songsContentDisplay = '';
	let songDisplayDiv = document.getElementById('songDisplay')
	let userAddedSongs = [];
	DOMint.printSongsToDOM = function(songsArray) {
		console.log("songs Array?", songsArray);
		songsArray = songsArray.concat(userAddedSongs);
		for (i=0; i < songsArray.length; i++) {

			songsContentDisplay += `
				<section class="dispSong" id="${songsArray[i]}">
				<h3>${songsArray[i].title}</h3><h4>by ${songsArray[i].artist} on the album ${songsArray[i].album}
				</section>
				`
			}

		songDisplayDiv.innerHTML = songsContentDisplay;
		//return songsArray
	}



	function addNewSong(nextStep, songArray, newSong) {
		console.log("song array?", songArray);
		songArray.unshift(newSong);
		console.log("song array?", songArray);
		nextStep(songArray);
	}

	globalScopeSD.DOMint = DOMint;
	return globalScopeSD;

})(SongDisplay || {});
