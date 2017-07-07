//Implement jQuery in your Music History code. Every innerHTML, getElementById, getElementByClassName, event listener and XHR request. Convert 'em all.


var SongDisplay = (function (globalScopeSongDisplay) {
	let importSongs = Object.create(null);

	importSongs.retrieveSongs = function(callbackCleanup) {
		$.ajax({
			url:"../data/songs.json"
		})
		.done(function(data) {
			callbackCleanup(data.preloaded_songs);
		});

	}

	importSongs.XHRFail = function() {
		alert('An error occurred while transferring data!')
	}

	// importSongs.XHRLoad = function(cleanUpCB, event) {
	// 	var songData = JSON.parse(event.target.responseText).preloaded_songs;
	// 	console.log("success", songData);
	// 	cleanUpCB(songData)
	// }

	// importSongs.XHRLoadMore = function() {
	// 	var moreSongData = JSON.parse(event.target.responseText).more_songs;
	// 	console.log("success again", moreSongData);
	// 	cleanUpCB(moreSongData);
	// }

	importSongs.addMoreSongs = function(cleanUpCB) {
		$.ajax({
			url: "../data/moreSongs.json"
		})	
		.done(function(data) {
			cleanUpCB(data.more_songs);
		})	
	}

  globalScopeSongDisplay.ImportSongs = importSongs;
  return globalScopeSongDisplay;

})(SongDisplay || {});
