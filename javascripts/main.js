let songsArray = [];
SongDisplay.ImportSongs.retrieveSongs();

let displayAddViewLink = document.getElementById('showAddviewLink');

displayAddViewLink.addEventListener("click", function() {
	toggleIsHidden();
});

function toggleIsHidden(){
	console.log("I clicked it", );
	let spaTypes = document.getElementsByClassName('pagecontainer')
	console.log("spatypes?", spaTypes);
	for (let i=0; i<spaTypes.length; i++) {
		spaTypes[i].classList.toggle('ishidden');
	}
}


