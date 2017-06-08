var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// console.log("Is this the whole array?", songs);

//Add one song to the beginning and the end of the array.
songs.unshift("The Way You Make Me Feel > by Michael Jackson on the album Bad")
songs.push("24 Frames > by Jason Isbell and the 400 Unit on the album Something More Than Free")

// console.log("Did I add stuff to the array?", songs);

// Loop over the array, and remove any words or characters that obviously don't belong.
for (i=0; i<songs.length; i++) {
	songs[i]=songs[i].replace(/@/g,"")
	songs[i]=songs[i].replace(/\*/g,"")
	songs[i]=songs[i].replace(/\(/g,"")
	songs[i]=songs[i].replace(/!/g,"")
	// Find and replace the > character in each item with a - character.
	songs[i]=songs[i].replace(/>/g,"-")
}

// console.log("Are the arrays cleaned up of ridic chars?", songs);


// Add each string to the DOM in index.html in the main content area.
// Example output:

// {Song name} by {Artist} on the album {Album}

let songDisplayDiv = document.getElementById('songDisplay')

let songsContentDisplay = '';


for (i=0; i < songs.length; i++) {

	songsContentDisplay += `
		<section class="dispSong" id="${songs[i]}">
		<h3>${songs[i]}</h3>
		</section>
		`
	}
	

songDisplayDiv.innerHTML = songsContentDisplay;		