Ti.UI.setBackgroundColor("#fff");

var data = require("FightingStyleData");

var mainWindow = Ti.UI.createWindow({
	title: "Different Ways of Combat",
	backgroundColor: "#f5f5f5"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var combatTables = Ti.UI.createTableView({
	top:0
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		combatTables.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}
	
var magicSection = Ti.UI.createTableViewSection({
	headerTitle: "Magical Attacks",
	footerTitle: "Mana Based"
});

var weaponsSection = Ti.UI.createTableViewSection({
	headerTitle: "Melee Attacks",
	footerTitle: "Stamina Based"
});

var combatSections = [magicSection,weaponsSection];
	combatTables.setData(combatSections);
	mainWindow.add(combatTables);

var getDetail = function (){
	var detailWindow = Ti.UI.createWindow({
		title: this.title,
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
		top: 30,
		left: 15,
		right: 15
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
};

for(n in data.combatData){
	
	for(m in data.combatData[n].magicCombatStyles){
		var theRow = Ti.UI.createTableViewRow({
		title: data.combatData[n].magicCombatStyles[m].title,
		desc: data.combatData[n].magicCombatStyles[m].description,
	    hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;
	
	magicSection.add(theRow);
	theRow.addEventListener("click", getDetail);
	};
	};	
};

for(n in data.combatData){
	
	for(m in data.combatData[n].weaponsCombatStyles){
		var theRow = Ti.UI.createTableViewRow({
		title: data.combatData[n].weaponsCombatStyles[m].title,
		desc: data.combatData[n].weaponsCombatStyles[m].description,
	    hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;
	
	weaponsSection.add(theRow);
	theRow.addEventListener("click", getDetail);
	};
	};	
};

navWindow.open();