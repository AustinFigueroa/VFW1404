	var imageWindow = Ti.UI.createWindow({
		title: this.title,
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var imageTitleLabel = Ti.UI.createLabel({
		text: dataSource.image,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 10,
		width: "100%",
		textAlign: "center"
	});
	
	var imageView = Ti.UI.createImageView({
		image: dataSource.image,
		top: 25,
		left: 25,
		right: 25,
		bottom: 25,
		imageAlign: "center"
	});
	imageView.add(imageTitleLabel);
	imageWindow.add(imageView);