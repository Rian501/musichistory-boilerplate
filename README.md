VERSION 5
This one's simple.

Implement jQuery in your Music History code. Every innerHTML, getElementById, getElementByClassName, event listener and XHR request. Convert 'em all.


VERSION 4
Requirements

Part One

Read from local JSON file with an XHR.
Loop over results and inject into Music History list view.
Add delete button to each row and, when it is clicked, delete the entire row in the DOM.


Part Two

Take your music and split it into two JSON files instead of them all living on one file.
Add a button at the bottom of your music list and label it More >.
Load the songs from the first list, and inject the DOM into the document as you've already done.
When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.


SPA - VERSION 3



Time to make Music History into a single page application. 

In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
Add a <button> element at the bottom of the input fields labeled "Add".
The input fields and the add button make up the Add Music View.
The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.
The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).
When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).
Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.









VERSION 2 information:
Use JavaScript arrays, loops, and innerHTML to show the music you love.

Use JavaScript to create a list of songs in the index.html file for your Music History project. Download the songs.js file, which contains an array of strings with song information.


Add each string to the DOM in index.html in the main content area.
Example output:

{Song name} by {Artist} on the album {Album}

{Song name} by {Artist} on the album {Album}












FROM VERSION 1:
# Music History

This is the project that you will be working for your individual work throughout the entire front end course. Don't worry, you'll be building lots of other applications, but when you learn a new technique, library or language, you'll be cutting your teeth with it on Music History.

I've started you off with a very basic HTML document, the `index.html` file. This file name is the default file that most any web server looks for in the directory in which is was started. This is why you don't have to type in `www.google.com/index.html`. If the file exists, the web server sends it back to you if you just request the root URL.

> **Terminology:** Root URL simply means your domain name (or IP address) with no other documents, or folders specified. `www.google.com` is the root URL of Google's web site, but `www.google.com/finance` is not.

## Individual Assignment

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

## Completing

Once you are done, make sure you add your files to git, make a commit, and then push your new code up to Github with the following command `git push origin master`.
