//need to deal with array of objects from JSON, and also clean up of unwanted chars

//songsArray is an array of objects


//this seems really repeptetive and there is probably a cleaner way to do this.
function cleanUpSongs(songsArray) {
	for (i=0; i<songsArray.length; i++) {
		songsArray[i].title=songsArray[i].title.replace(/@/g,"")
		songsArray[i].title=songsArray[i].title.replace(/\*/g,"")
		songsArray[i].title=songsArray[i].title.replace(/\(/g,"")
		songsArray[i].title=songsArray[i].title.replace(/!/g,"")
		songsArray[i].title=songsArray[i].title.replace(/>/g,"-")

		songsArray[i].album=songsArray[i].album.replace(/@/g,"")
		songsArray[i].album=songsArray[i].album.replace(/\*/g,"")
		songsArray[i].album=songsArray[i].album.replace(/\(/g,"")
		songsArray[i].album=songsArray[i].album.replace(/!/g,"")
		songsArray[i].album=songsArray[i].album.replace(/>/g,"-")

		songsArray[i].artist=songsArray[i].artist.replace(/@/g,"")
		songsArray[i].artist=songsArray[i].artist.replace(/\*/g,"")
		songsArray[i].artist=songsArray[i].artist.replace(/\(/g,"")
		songsArray[i].artist=songsArray[i].artist.replace(/!/g,"")
		songsArray[i].artist=songsArray[i].artist.replace(/>/g,"-")
	}
	console.log("song data clean?", songsArray);
	SongDisplay.DOMint.printSongsToDOM(songsArray);
}