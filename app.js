/**
* App.js
*/
var FileKnight = require("./lib/FileKnight/FileKnight.js");

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

		//Create a new FileKnight object
		let fk = new FileKnight(win);
		fk.init();
	});
}

init();
