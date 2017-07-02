//need to deal with array of objects from JSON, and also clean up of unwanted chars


function cleanUpSongs(songsArray) {
	for (i=0; i<songsArray.length; i++) {
		songsArray[i]=songsArray[i].replace(/@/g,"")
		songsArray[i]=songsArray[i].replace(/\*/g,"")
		songsArray[i]=songsArray[i].replace(/\(/g,"")
		songsArray[i]=songsArray[i].replace(/!/g,"")
		songsArray[i]=songsArray[i].replace(/>/g,"-")
	}
	console.log("song data clean?", songsArray);
	//printSongsToDOM(songs);
}