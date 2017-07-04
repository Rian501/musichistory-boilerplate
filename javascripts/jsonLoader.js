var SongDisplay = (function (globalScopeSongDisplay) {
	let importSongs = Object.create(null);

	importSongs.retrieveSongs = function(callbackCleanup) {
		$.ajax({
			url:"../data/songs.json"
		})
		.done(function(data) {
			callbackCleanup(data.preloaded_songs)
		});

	}

	importSongs.XHRFail = function() {
		alert('An error occurred while transferring data!')
	}

	importSongs.XHRLoad = function(cleanUpCB, event) {
		var songData = JSON.parse(event.target.responseText).preloaded_songs;
		console.log("success", songData);
		cleanUpCB(songData)
	}

	importSongs.XHRLoadMore = function(cleanUpCB, event) {
		var moreSongData = JSON.parse(event.target.responseText).more_songs;
		console.log("success again", moreSongData);
		cleanUpCB(moreSongData);
	}

	importSongs.addMoreSongs = function() {
		let moreSongsRetrieve = new XMLHttpRequest();
		moreSongsRetrieve.open("GET", "../data/moreSongs.json");
		moreSongsRetrieve.send();
		moreSongsRetrieve.addEventListener("error", importSongs.XHRFail);
		moreSongsRetrieve.addEventListener("load", function() {
			console.log("moresongsLoaded", moreSongsRetrieve);
			SongDisplay.ImportSongs.XHRLoadMore(cleanUpSongs, event);
		})
	}

  globalScopeSongDisplay.ImportSongs = importSongs;
  return globalScopeSongDisplay;

})(SongDisplay || {});
