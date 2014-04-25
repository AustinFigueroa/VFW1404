Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
var size = 70;


	var imageWin = Ti.UI.createWindow({
		title: "Image Gallery",
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var imageNavWin = Ti.UI.iOS.createNavigationWindow({
		window: imageWin
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font:{fontSize: 14, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
		});
		
		var closeWindow = function(){
		 var loadfile = require("app");
};
		
		closeButton.addEventListener("click", closeWindow);
		imageNavWin.add(closeButton);
	
		
	var border = Ti.UI.createView({
	backgroundColor: "#333",
	height: 1,
	width: pWidth,
	top: 20
	});
	
	var viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	height: pHeight-border.top-border.height,
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef"
	});

	for(var i=0; i<imageFiles.length; i++){
		
		var view = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 10,
		left: 10,
		width: size,
		height:size
		});
		
		var picView = Ti.UI.createImageView({
		    image: "images/" + imageFiles[i],
		    top: 0,
		    width: view.width,
		    hasChild: true
		});
	};
view.add(picView);
viewContainer.add(view);
imageWin.add(border);
imageNavWin.add(viewContainer);
	
	
var getImage = function(dataSource){
	var imageWindow = Ti.UI.createWindow({
		title: dataSource.image,
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var imageView = Ti.UI.createImageView({
		image: dataSource.image,
		top: 25,
		left: 25,
		right: 25,
		bottom: 25,
		imageAlign: "center"
	});
	imageWindow.add(imageView);
	imageNavWin.openWindow(imageWindow);
};

picView.addEventListener("click", function(event){
			getImage(event.source);
		});
		

imageNavWin.add(imageWin);
imageNavWin.open();
