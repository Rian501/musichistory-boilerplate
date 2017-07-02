// need to print to DOM the preloaded songs and also
//take in input, push to array for cleaning, and then print those to DOM also


let addMusicBtn = document.getElementById('addMusicBtn')

addMusicBtn.addEventListener('click', function() {
	addUserSongToArray();
	toggleIsHidden();
})

function addUserSongToArray() {
	let getSongTitleUserInput = document.getElementById('song-input').value;
	let getSongArtistUserInput = document.getElementById('artist-input').value;
	let getSongAlbumUserInput = document.getElementById('album-input').value;
	let songToAdd = `${getSongTitleUserInput} > by ${getSongArtistUserInput} on the album ${getSongAlbumUserInput}`
	console.log("song to add?", songToAdd);
	addNewSong(cleanUpSongs, songs, songToAdd);
}


function printSongsToDOM(songsArray) {
	let songsContentDisplay = '';
	let songDisplayDiv = document.getElementById('songDisplay')
	for (i=0; i < songs.length; i++) {

		songsContentDisplay += `
			<section class="dispSong" id="${songs[i]}">
			<h3>${songs[i]}</h3>
			</section>
			`
		}
	songDisplayDiv.innerHTML = songsContentDisplay;
}



function addNewSong(nextStep, songArray, newSong) {
	songArray.unshift(newSong);
	nextStep(songArray);
}

