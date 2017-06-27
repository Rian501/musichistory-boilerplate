var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//Add one song to the beginning and the end of the array.
songs.unshift("The Way You Make Me Feel > by Michael Jackson on the album Bad")
songs.push("24 Frames > by Jason Isbell and the 400 Unit on the album Something More Than Free")

for (i=0; i<songs.length; i++) {
	songs[i]=songs[i].replace(/@/g,"")
	songs[i]=songs[i].replace(/\*/g,"")
	songs[i]=songs[i].replace(/\(/g,"")
	songs[i]=songs[i].replace(/!/g,"")
	songs[i]=songs[i].replace(/>/g,"-")
}



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


let displayAddViewLink = document.getElementById('showAddviewLink');

displayAddViewLink.addEventListener("click", function() {
	//toggle ishidden
	console.log("I cliked it", );
	let spaTypes = document.getElementsByClassName('pagecontainer')
	console.log("spatypes?", spaTypes);
	for (let i=0; i<spaTypes.length; i++) {
		spaTypes[i].classList.toggle('ishidden');
	}
});