var pWidth = Ti.Platform.displayCaps.platformWidth;

var mainWin = Ti.UI.createWindow({
	title: "The Hulk Kingdom",
	backgroundColor: "#239b1d",
	layout: "horizontal",
	top: 20
});

var navWin = Ti.UI.iOS.createNAvigationWindow({
	top: 0,
	backgroundColor: "#cecece",
	window: mainWin
});

var galleryButton = Ti.UI.createButton({
	title: "Hulk Gallery",
	backgroundColor: "#1abc1e",
	textAlign: "center",
	font: {fontSize: 25, fontFamily: "Arial"},
	top: 0,
	width: pWidth,
	height:75
});

var dataButton = Ti.UI.createButton({
	title: "The Hulk Database",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 25, fontFamily: "Arial"},
	top: galleryButton.length,
	width: pWidth,
	height:75
});

var customButton = Ti.UI.createButton({
	title: "Get HulkAlize",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 25, fontFamily: "Arial"},
	top: dataButton.length,
	width: pWidth,
	height:75
});

