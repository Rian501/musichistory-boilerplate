let songsArray = [];
SongDisplay.ImportSongs.retrieveSongs(cleanUpSongs);

let $displayAddViewLink = $('#showAddviewLink');

$displayAddViewLink.click( function() {
	toggleIsHidden();
});

function toggleIsHidden(){
	console.log("I clicked it", );
	let $spaTypes = $('.pagecontainer')
	console.log("spatypes?", $spaTypes);
	for (let i=0; i<$spaTypes.length; i++) {
		$spaTypes[i].classList.toggle('ishidden');
	}
}


