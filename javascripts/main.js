//get JSON file, parse, then clean up and print to DOM
//if doing as IIFEs, need to probably iifi-fy the rest too
//So... one IIFE to json load
//One to process and clean up
//One to print to DOM
//and a main to be master of puppets


let songsArray = [];
SongDisplay.ImportSongs.retrieveSongs();

//SongDisplay.DOMint.printSongsToDOM(cleanArray);



// function preLoad(callBack) {
// 	preloaded.forEach(function(song) {
// 		songs[songs.length] = `${song}`;
// 	})
// 	callBack(songs);
// }

// preLoad(cleanUpSongs);
//Add one song to the beginning and the end of the array.




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


