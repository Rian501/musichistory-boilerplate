var SongDisplay = (function (globalScopeSongDisplay) {
	let importSongs = Object.create(null);

	importSongs.retrieveSongs = function() {
		let songsRetrieve = new XMLHttpRequest();
		songsRetrieve.addEventListener("load", function() {
			importSongs.XHRLoad(cleanUpSongs, event);
		});
		songsRetrieve.addEventListener("error", importSongs.XHRFail);
		songsRetrieve.open("GET", "songs.json");
		songsRetrieve.send();


	}

	importSongs.XHRFail = function() {
		alert('An error occurred while transferring data!')
	}

	importSongs.XHRLoad = function(cleanUpCB, event) {
		var songData = JSON.parse(event.target.responseText).preloaded_songs;
		console.log("success", songData);
		cleanUpCB(songData)

	}




  globalScopeSongDisplay.ImportSongs = importSongs;
  return globalScopeSongDisplay;

})(SongDisplay || {});
