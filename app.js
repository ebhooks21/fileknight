/**
* App.js
*/
//var MauricesGreatAdventure = require('./lib/MauricesGreatAdventure/MauricesGreatAdventure.js');

/**
* Function to initialize the game.
*/
function init()
{
	//Get the window
	//var window = (nw.Window).get();

	nw.Window.open('./views/main.html', {}, function(win)
	{
		//Initialize the window
		win.title = "File Knight";
		win.moveTo(10, 10);

		//Create the MauricesGreatAdventure object
		//var mga = new MauricesGreatAdventure(win);

		//Initialize MauricesGreatAdventure game
		//mga.init();
	});
}

init();
