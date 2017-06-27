var songs = [];
var preloaded = [
	"Legs > by Z*ZTop on the album Eliminator",
	"The Logical Song > by Supertr@amp on the album Breakfast in America",
	"Another Brick in the Wall > by Pink Floyd on the album The Wall",
	"Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction",
	"Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
]

function preLoad(callBack) {
	preloaded.forEach(function(song) {
		songs[songs.length] = `${song}`;
	})
	callBack(songs);
}

preLoad(cleanUpSongs);
//Add one song to the beginning and the end of the array.
songs.unshift("The Way You Make Me Feel > by Michael Jackson on the album Bad")
songs.push("24 Frames > by Jason Isbell and the 400 Unit on the album Something More Than Free")

function addNewSong(nextStep, songArray, newSong) {
	songArray.unshift(newSong);
	nextStep(songArray);
}

function cleanUpSongs(songsArray) {
	for (i=0; i<songs.length; i++) {
		songs[i]=songs[i].replace(/@/g,"")
		songs[i]=songs[i].replace(/\*/g,"")
		songs[i]=songs[i].replace(/\(/g,"")
		songs[i]=songs[i].replace(/!/g,"")
		songs[i]=songs[i].replace(/>/g,"-")
		
	}
	printSongsToDOM(songs);
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

let displayAddViewLink = document.getElementById('showAddviewLink');

displayAddViewLink.addEventListener("click", function() {
	toggleIsHidden();
});

function toggleIsHidden(){
	console.log("I cliked it", );
	let spaTypes = document.getElementsByClassName('pagecontainer')
	console.log("spatypes?", spaTypes);
	for (let i=0; i<spaTypes.length; i++) {
		spaTypes[i].classList.toggle('ishidden');
	}
}


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