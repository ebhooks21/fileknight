/**
* TreeView.js -- Primary entry point for TreeView.
*/
var fs = require('fs');
var os = require('os');
var $ = require('jquery');

class TreeView
{
	constructor(window, fileKnight)
	{
		this.mainWin = window;
		this.mainDoc = ((this.mainWin).window).document;
		this.fileKnight = fileKnight;
	}

	init(path)
	{
		let self = this;

		let treeView = (self.fileKnight).loadView('treeview');

		$((self.mainDoc).getElementById("leftpane")).html(treeView);

		//Populate the treeview
		self.populateTreeView(path);
	}

	/**
	 * Function to populate the treeview with data.
	 */
	populateTreeView(path)
	{
		let displayPath = "";

		if((path != null) && (path != undefined) && (path != ""))
		{
			displayPath = path;
		}

		else
		{
			displayPath = os.homedir();
		}

		console.log(fs.readdirSync(displayPath));
	}
};

module.exports = TreeView;
