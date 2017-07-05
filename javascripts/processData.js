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
	console.log("songsaray in processdata?", songsArray);
	songsArray = songsArray;
	$(SongDisplay.DOMint.printSongsToDOM(songsArray)).ready( SongDisplay.DOMint.addDeleteBtnFunctionality());

	return songsArray
}