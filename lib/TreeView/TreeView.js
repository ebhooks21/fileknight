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

		console.log(fs.readdirSync(displayPath, {withFileTypes: true}));

		//Check each of the entries and find out which are directories
		try
		{
			let folderEntries = fs.readdirSync(displayPath, {withFileTypes: true});
			let subFolders = [];

			if(folderEntries.length > 0)
			{
				for(let i = 0; i < folderEntries.length; i++)
				{
					if(folderEntries[i].isDirectory())
					{
						subFolders.push({name: folderEntries[i].name, path: displayPath + "/" + folderEntries[i].name});	
					}
				}

				console.log(subFolders);
			}
		}

		catch(err)
		{
			alert("Unable to read folder.");
			console.log(err);
		}
	}
};

module.exports = TreeView;
