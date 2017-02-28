
function start() {
  
  var border1 = document.getElementById('border1');
  var leftArrow = document.getElementById('leftArrow');
  var rightArrow = document.getElementById('rightArrow');
  var infoButton = document.getElementById('infoButton');
  var slideA = document.getElementById('slideA');
  var slideContainer = document.getElementById('slides');
  var slideLink = document.getElementById('slideLink');
  var eachSlideText = document.getElementsByClassName('eachSlideText');
  
  //var textslideB = document.getElementById('slideB');
  
  /*
  var text1 = document.getElementById('slideText1');
  var text2 = document.getElementById('slideText2');
  var text3 = document.getElementById('slideText3');
  var text4 = document.getElementById('slideText4');
  var text5 = document.getElementById('slideText5');
  var text6 = document.getElementById('slideText6');
  var text7 = document.getElementById('slideText7');
  var text8 = document.getElementById('slideText8');
  var text9 = document.getElementById('slideText9');
  */

// Slide Objects:  
  var slide1 = {
    image: projectImg1,
    text: document.getElementById('slideText1'),
    href: "https://jrleja0.github.io/tile-swapping-game-jrleja0/"
  };
  var slide2 = {
    image: projectImg2,
    text: document.getElementById('slideText2'),
    href: "https://jrleja0.github.io/Moving-Spotlights-v1/"
  };
  var slide3 = {
    image: projectImg3,
    text: document.getElementById('slideText3'),
    href: "https://jrleja0.github.io/Rock-Dodger-Game-Flatiron-School-Project/"
  };
  var slide4 = {
    image: projectImg4,
    text: document.getElementById('slideText4'),
    href: "https://jrleja0.github.io/Tile-Abstraction-v2.2/"
  };
  var slide5 = {
    image: projectImg5,
    text: document.getElementById('slideText5'),
    href: "https://jrleja0.github.io/Tile-Abstraction-v2/"
  };
  var slide6 = {
    image: projectImg6,
    text: document.getElementById('slideText6'),
    href: "https://jrleja0.github.io/Tile-Abstraction-v1/"
  };
  var slide7 = {
    image: instImg2,
    text: document.getElementById('slideText7'),
    href: "https://www.instagram.com/jrleja/"
  };
  var slide8 = {
    image: instImg1,
    text: document.getElementById('slideText8'),
    href: "https://www.instagram.com/jrleja/"
  };
  
  var slide9 = {
    image: instImg3,
    text: document.getElementById('slideText9'),
    href: "https://www.instagram.com/jrleja/"
  }
  
  var slideArray = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];
  
  //var slide3 = document.getElementById('slide3');
  //var slide4 = document.getElementById('slide4');
  //var slide5 = document.getElementById('slide5');
  //var slide6 = document.getElementById('slide6');
  //var slide7 = document.getElementById('slide7');
  //var slide8 = document.getElementById('slide8');
  //var allSlides = document.getElementsByClassName("eachSlide");
  //
  
  leftArrow.addEventListener("click", back);
  rightArrow.addEventListener("click", next);
  infoButton.addEventListener("click", moreInfo);
  slideContainer.addEventListener("mouseenter", function() {
    if (slideTextVisible === false)
      moreInfo()});
  slideContainer.addEventListener("mouseleave", moreInfo);
  
  
// drawImage onto canvas function:  
  function drawImage(canvas, image) {
      var cx = canvas.getContext("2d");
      //cx.clearRect(0, 0, canvas.width, canvas.height);   
      cx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      return [canvas, image];
  }

//\\//\\//  
// Drawing and animating border:
//\\//\\//  
  drawImage(border1, blueTile);  
  
  var counter = 0;
  var index = 0;
  var borderArray = [blueTile, redTile, greenTile, yellowTile];
  
  function animateBorder(canvasArray) {  
    //console.log(counter, "&", index);
    if (counter === 0) {
      border1.style.opacity = 1;
      drawImage(border1, canvasArray[index]);
      index = (index+1) % 4;
    }
    else if (counter === 92)
      border1.style.opacity = 0.8;
    else if (counter === 96)
      border1.style.opacity = 0.5;
    else if (counter === 98)
      border1.style.opacity = 0.3;
    else if (counter === 100)
      border1.style.opacity = 0.1;
    counter = (counter+1) % 102;
  }    

  
//\\//\\//  
// Slide Function: 
//\\//\\//   

drawImage(slideA, instImg3);  
var slideNum = 8;
//var slideArray = [slide1.image, slide2.image, slide3.image, slide4.image, slide5.image, slide6.image, slide7.image, slide8.image, slide9.image];
//var slideArray = [projectImg1, projectImg2, projectImg3, projectImg4, projectImg5, projectImg6, instImg2, instImg1, instImg3];
//var canvasArray_Slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
//var previousCanvas = slide8;
  
function slideSwitch() {    
  // canvasArray_Slides[slideNum].style.opacity = 0;
  if (slideTextVisible) {
    for (var i=0; i < slideArray.length; i++) 
      (slideArray[i].text).style.visibility = "hidden";
    slideContainer.style.filter = "brightness(100%)";
    slideContainer.style.opacity = 1;
    slideTextVisible = false; 
  }
  drawImage(slideA, slideArray[slideNum].image);
  slideLink.href = slideArray[slideNum].href;

/*
  counter2 = 0;  
    function fadeIn() {
      if (counter2 === 2)
        canvasArray_Slides[slideNum].style.opacity = 0.2;
      else if (counter === 4)
        canvasArray_Slides[slideNum].style.opacity = 0.4;
      else if (counter === 6)
        canvasArray_Slides[slideNum].style.opacity = 0.6;
      else if (counter === 8)
        canvasArray_Slides[slideNum].style.opacity = 0.8;
      else if (counter === 10)
        canvasArray_Slides[slideNum].style.opacity = 1;
      counter = (counter+1) % 11;    
    }  
  
  var slideFadeInterval = (fadeIn, 1);
  
  if (canvasArray_Slides[slideNum].style.opacity === 1)
    clearInterval(slideFadeInterval);
*/
}

// back (arrowLeft)  
function back() {
  if (slideNum === 0)
    slideNum = slideArray.length-1;
  else
    slideNum--; 
  
  slideSwitch();   
}
// next (arrowRight)   
function next() {
  if (slideNum === slideArray.length-1)
    slideNum = 0;
  else
    slideNum++;
  
  slideSwitch();
}

var slideTextVisible = false;  

function moreInfo() {    
  if (slideTextVisible === false) {
    for (var i=0; i < slideArray.length; i++) 
      (slideArray[i].text).style.visibility = "hidden";
    slideContainer.style.filter = "brightness(140%)";
    slideContainer.style.opacity = 0.8;
    (slideArray[slideNum].text).style.visibility = "visible";    
    slideTextVisible = true;
  }
  else {
    for (var i=0; i < slideArray.length; i++) 
      (slideArray[i].text).style.visibility = "hidden";
    slideContainer.style.filter = "brightness(100%)";
    slideContainer.style.opacity = 1;
    slideTextVisible = false;
  }
} 
 
  var borderSlideshow = setInterval(function() {animateBorder(borderArray)}, 100);
   
}  


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// Github hosted images //
// RED TILE //
var redTileImage = new Image();
var redTile = document.createElement("canvas");
redTile.style.visibility = "hidden";
var ctxR = redTile.getContext("2d");
// var src = "https://raw.githubusercontent.com/jrleja0/tile-swapping-game-jrleja0/master/Image/covent_garden.jpg"
// var src = "file:///Users/jrleja/Documents/Tile%20App%202_4%20Colors/Abstraction_files/Red%20Tile.jpeg";
var srcR = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Red%20Tile.jpeg";

redTileImage.crossOrigin = "Anonymous";

redTileImage.onload = function() {
    redTile.width = redTileImage.width;
    redTile.height = redTileImage.height;
    ctxR.drawImage(redTileImage, 0, 0);
}

redTileImage.src = srcR;

// BLUE TILE //
var blueTileImage = new Image();
var blueTile = document.createElement("canvas");
blueTile.style.visibility = "hidden";
var ctxB = blueTile.getContext("2d");
var srcB = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Blue%20Tile.jpeg";

blueTileImage.crossOrigin = "Anonymous";

blueTileImage.onload = function() {
    blueTile.width = blueTileImage.width;
    blueTile.height = blueTileImage.height;
    ctxB.drawImage(blueTileImage, 0, 0);
}

blueTileImage.src = srcB;

// GREEN TILE //
var greenTileImage = new Image();
var greenTile = document.createElement("canvas");
greenTile.style.visibility = "hidden";
var ctxG = greenTile.getContext("2d");
var srcG = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Green%20Tile.jpeg";

greenTileImage.crossOrigin = "Anonymous";

greenTileImage.onload = function() {
    greenTile.width = greenTileImage.width;
    greenTile.height = greenTileImage.height;
    ctxG.drawImage(greenTileImage, 0, 0);
}

greenTileImage.src = srcG;

// YELLOW TILE //
var yellowTileImage = new Image();
var yellowTile = document.createElement("canvas");
yellowTile.style.visibility = "hidden";
var ctxY = yellowTile.getContext("2d");
var srcY = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Yellow%20Tile.jpeg";

yellowTileImage.crossOrigin = "Anonymous";

yellowTileImage.onload = function() {
    yellowTile.width = yellowTileImage.width;
    yellowTile.height = yellowTileImage.height;
    ctxY.drawImage(yellowTileImage, 0, 0);
}

yellowTileImage.src = srcY;

// Project 1 Image: Tile Swapping Game //
var project1_Image = new Image();
var projectImg1 = document.createElement("canvas");
projectImg1.style.visibility = "hidden";
var ctxP1 = projectImg1.getContext("2d");
var srcP1 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/puzzle_tile_swapping_game.png";

project1_Image.crossOrigin = "Anonymous";

project1_Image.onload = function() {
    projectImg1.width = project1_Image.width;
    projectImg1.height = project1_Image.height;
    ctxP1.drawImage(project1_Image, 0, 0);
}

project1_Image.src = srcP1;

// Project 2 Image: Moving Spotlights //
var project2_Image = new Image();
var projectImg2 = document.createElement("canvas");
projectImg2.style.visibility = "hidden";
var ctxP2 = projectImg2.getContext("2d");
var srcP2 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/Moving%20Spotlights_1.png";

project2_Image.crossOrigin = "Anonymous";

project2_Image.onload = function() {
    projectImg2.width = project2_Image.width;
    projectImg2.height = project2_Image.height;
    ctxP2.drawImage(project2_Image, 0, 0);
}

project2_Image.src = srcP2;

// Project 3 Image: Rock Dodger Game //
var project3_Image = new Image();
var projectImg3 = document.createElement("canvas");
projectImg3.style.visibility = "hidden";
var ctxP3 = projectImg3.getContext("2d");
var srcP3 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/rock_dodger_1.png";

project3_Image.crossOrigin = "Anonymous";

project3_Image.onload = function() {
    projectImg3.width = project3_Image.width;
    projectImg3.height = project3_Image.height;
    ctxP3.drawImage(project3_Image, 0, 0);
}

project3_Image.src = srcP3;

// Project 4 Image: tile abstraction-2.2 //
var project4_Image = new Image();
var projectImg4 = document.createElement("canvas");
projectImg4.style.visibility = "hidden";
var ctxP4 = projectImg4.getContext("2d");
var srcP4 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/tile_abstraction_v2.2.png";

project4_Image.crossOrigin = "Anonymous";

project4_Image.onload = function() {
    projectImg4.width = project4_Image.width;
    projectImg4.height = project4_Image.height;
    ctxP4.drawImage(project4_Image, 0, 0);
}

project4_Image.src = srcP4;

// Project 5 Image: tile abstraction-2.1 //
var project5_Image = new Image();
var projectImg5 = document.createElement("canvas");
projectImg5.style.visibility = "hidden";
var ctxP5 = projectImg5.getContext("2d");
var srcP5 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/tile_abstraction_v2.1.png";

project5_Image.crossOrigin = "Anonymous";

project5_Image.onload = function() {
    projectImg5.width = project5_Image.width;
    projectImg5.height = project5_Image.height;
    ctxP5.drawImage(project5_Image, 0, 0);
}

project5_Image.src = srcP5;

// Project 6 Image: tile abstraction-1 //
var project6_Image = new Image();
var projectImg6 = document.createElement("canvas");
projectImg6.style.visibility = "hidden";
var ctxP6 = projectImg6.getContext("2d");
var srcP6 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/tile_abstraction_v1.png";

project6_Image.crossOrigin = "Anonymous";

project6_Image.onload = function() {
    projectImg6.width = project6_Image.width;
    projectImg6.height = project6_Image.height;
    ctxP6.drawImage(project6_Image, 0, 0);
}

project6_Image.src = srcP6;

// Instagram Photo 1: Central Park, Summer //
var instImg1_Image = new Image();
var instImg1 = document.createElement("canvas");
instImg1.style.visibility = "hidden";
var ctxI1 = instImg1.getContext("2d");
var srcI1 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/Central%20Park%20-%20June%202015_cropped.jpeg";

instImg1_Image.crossOrigin = "Anonymous";

instImg1_Image.onload = function() {
    instImg1.width = instImg1_Image.width;
    instImg1.height = instImg1_Image.height;
    ctxI1.drawImage(instImg1_Image, 0, 0);
}

instImg1_Image.src = srcI1;

// Instagram Photo 2: Central Park, Winter //
var instImg2_Image = new Image();
var instImg2 = document.createElement("canvas");
instImg2.style.visibility = "hidden";
var ctxI2 = instImg2.getContext("2d");
var srcI2 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/Central%20Park_Jan%202017.jpg";

instImg2_Image.crossOrigin = "Anonymous";

instImg2_Image.onload = function() {
    instImg2.width = instImg2_Image.width;
    instImg2.height = instImg2_Image.height;
    ctxI2.drawImage(instImg2_Image, 0, 0);
}

instImg2_Image.src = srcI2;

// Instagram Photo 3: Bowery //
var instImg3_Image = new Image();
var instImg3 = document.createElement("canvas");
instImg3.style.visibility = "hidden";
var ctxI3 = instImg3.getContext("2d");
var srcI3 = "https://raw.githubusercontent.com/jrleja0/Portfolio-Projects-Feb-2017/master/Bowery.jpg";

instImg3_Image.crossOrigin = "Anonymous";

instImg3_Image.onload = function() {
    instImg3.width = instImg3_Image.width;
    instImg3.height = instImg3_Image.height;
    ctxI3.drawImage(instImg3_Image, 0, 0);
}

instImg3_Image.src = srcI3;

// Covent Garden Image //

var covGarImage = new Image
var covGar1 = document.createElement("canvas")
covGar1.style.visibility = "hidden"
var ctxCG = covGar1.getContext("2d")
var srcCG = "https://raw.githubusercontent.com/jrleja0/tile-swapping-game-jrleja0/master/Image/covent_garden.jpg"

covGarImage.crossOrigin = "Anonymous";

covGarImage.onload = function() {
    covGar1.width = covGarImage.width;
    covGar1.height = covGarImage.height;
    ctxCG.drawImage(covGarImage, 0, 0);
}

covGarImage.src = srcCG;

/////////////////////////////////
/////////////////////////////////
// END of Github hosted images //

/////////////////////////////////
/////////////////////////////////