var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var resertButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares=3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares=6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
    }
})

resertButton.addEventListener("click",function(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    
    messageDisplay.textContent="";
    
    for (var i=0 ; i<squares.length ; i++ ){
   //add colors to squares
squares[i].style.backgroundColor = colors[i];
//add listeneres to squares;
        h1.style.backgroundColor="steelblue";
}
})

for (var i=0 ; i<squares.length ; i++ ){
   //add colors to squares
squares[i].style.backgroundColor = colors[i];
//add listeneres to squares;
squares[i].addEventListener("click",function(){
    //pick the clicked color
    var clickedColor=this.style.backgroundColor;
    //comparing colors
    if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct!";
        changeColors(clickedColor);
        resertButton.textContent="Play Again?";
        h1.style.backgroundColor=clickedColor;
        h2.style.color=clickedColor;
    }
    else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";
    }
})
}

function changeColors(color){
    //loop through all the squares to change the color
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
var arr=[];
    
for(var i=0;i<num;i++){
    arr.push(RandomColor());
}
    
return arr;
}


function RandomColor(){
    
var r=Math.floor(Math.random()* 256);
var g=Math.floor(Math.random()* 256);
var b=Math.floor(Math.random()* 256);
return "rgb(" + r + ", " +g + ", " + b +")"; 
    }