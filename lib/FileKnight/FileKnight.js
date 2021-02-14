/**
* FileKnight.js -- Primary entry point for FileKnight.
*/
var fs = require('fs');
var $ = require('jquery');
var TreeView = require('../TreeView/TreeView.js');

class FileKnight
{
	constructor(window)
	{
		this.mainWin = window;
		this.mainDoc = ((this.mainWin).window).document;
		this.treeView = new TreeView(this.mainWin, this);
	}

	init()
	{
		let self = this;

		//Start the game
		setTimeout(function()
		{
			(self.mainWin).resizeTo(1000, 730);
			let mainView = self.loadView('mainview');
			self.setView(self.mainDoc, mainView);


			//Setup the views
			(self.treeView).init();
		}, 200);
	}

	loadView(viewFile)
	{
		let view = (fs.readFileSync("./views/" + viewFile + ".html")).toString();

		return this.getDefaultStyle() + view;
	}

	getDefaultStyle()
	{
		let style = "<link href='./css/style.css' rel='stylesheet'>";

		return style;
	}

	getMainWindow()
	{
		return this.mainWin;
	}

	setView(doc, view)
	{
		doc.write(view);
	}

	clearScreen(doc)
	{
		doc.open();
	}

	cleanUp(doc)
	{
		$(doc).off();
		let html = doc.documentElement;

		while(html.firstChild)
		{
			html.removeChild(html.firstChild);
		}

		global.gc();
	}
};

module.exports = FileKnight;
