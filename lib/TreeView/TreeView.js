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
		let self = this;
		let displayPath = "";

		if((path != null) && (path != undefined) && (path != ""))
		{
			displayPath = path;
		}

		else
		{
			displayPath = os.homedir();
		}

		//Check each of the entries and find out which are directories
		try
		{
			let dirObj = {name: displayPath, path: displayPath, subFolders: null};
			dirObj.subFolders = self.getFolderSubfolders(dirObj);

			//console.log(dirObj);
		}

		catch(err)
		{
			alert("Unable to read folder.");
			console.log(err);
		}
	}

	/**
	 * Function to get the subfolders of a folder.
	 */
	getFolderSubfolders(dirObj)
	{
		let self = this;
		let folderEntries = null;
		let subFolders = [];
		let dirObjTemp = null;

		try
		{	
			let access = fs.accessSync(dirObj.path, (fs.constants.R_OK));

			folderEntries = fs.readdirSync(dirObj.path, {withFileTypes: true});
		}

		catch(err)
		{
			//Unable to read, ignore
		}

		if(folderEntries != null)
		{
			if(folderEntries.length > 0)
			{
				for(let i = 0; i < folderEntries.length; i++)
				{
					if(folderEntries[i].isDirectory())
					{
						dirObjTemp = {name: folderEntries[i].name, path: dirObj.path + "/" + folderEntries[i].name, subFolders: null};
						dirObjTemp.subFolders = self.getFolderSubfolders(dirObjTemp);

						subFolders.push(dirObjTemp);	
					}
				}
			}
		}

		return subFolders;
	}
};

module.exports = TreeView;
