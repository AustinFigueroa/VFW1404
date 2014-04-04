Ti.UI.setBackgroundColor("#fff");

var arrayMovieList = ["Movies I saw last week."];

var mainWindow = Ti.UI.createWindow({
	
	backgroundColor: "#fff",
	backgroundImage: "CustomBG.png",
	backgroundRepeat: true,
	top: 20,
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderColor: "#000",
	borderRadius: 5,
	borderWidth: 1,
	top: 30,
	left: 20,
	right: 20,
	bottom: 120
});

var mySecondView = Ti.UI.createView({
	backgroundColor: "#000",
	borderColor: "#000",
	borderRadius: 5,
	borderWidth: 1,
	height: 50,
	width: 75,
	bottom: 35,
	left: 40,
});

var myThirdView = Ti.UI.createView({
	backgroundColor: "#000",
	borderColor: "#000",
	borderRadius: 5,
	borderWidth: 1,
	height: 50,
	width: 75,
	bottom: 35,
	right: 40,
});
var myFourthView = Ti.UI.createView({
	backgroundColor: "#333",
	borderColor: "#000",
	borderRadius: 5,
	borderWidth: 1,
	height: 110,
	bottom: 5,
	left:20,
	right:20
	});

var myText = Ti.UI.createLabel({
	text:"Previous",
	color:"red",
	font: {fontSize: 14, fontFamily: "Arial"}
});

var mySecondText = Ti.UI.createLabel({
	text:"Next",
	color:"red",
	font: {fontSize: 14, fontFamily: "Arial"}
});

var myThirdText = Ti.UI.createLabel({
	text: arrayMovieList[0],
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "center",
	top: 25,
	right: 25,
	left: 25,
	bottom:25
});

var loadfile = require("movieList");

mainWindow.add(myFirstView,myFourthView,mySecondView,myThirdView);
mySecondView.add(myText);
myThirdView.add(mySecondText);
myFirstView.add(myThirdText);
mainWindow.open();