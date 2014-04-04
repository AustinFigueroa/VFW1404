var movieNames = ["V for Vendetta", "Titanic", "Ride Along", "The Great Gatsby","Fantastic 4","The Bank Job", "Patriot"];

var buttonClick = -1;

var clickNext = function(){
	
	buttonClick++;
	console.log(movieNames[buttonClick]);
	myThirdText.text = movieNames[buttonClick];

    if(buttonClick === 7){
    	
    	console.log(movieNames[7]);
    	myThirdText.text = movieNames[7];
    	buttonClick = -1;
    	clickNext();
    }
};


var clickPrevious = function(){
	
	buttonClick--;
	console.log(movieNames[buttonClick]);
	myThirdText.text = movieNames[buttonClick];

    if(buttonClick === -1){
    	
    	buttonClick = 7;
    	clickPrevious();
    }
  };
  
 myThirdView.addEventListener("click", clickNext);
 mySecondView.addEventListener("click", clickPrevious);
