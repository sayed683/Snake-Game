
// canvas "snake game 'playground'"
var canvas;

// cellsize
var cellSize = 20;

// width = columns
var columns = 20;

// height = rows
var rows = 20;

// tools to set style , width , height and positions
var tools;

// score board
let score = 0;


// snake positions (x , y)
var snakeX = cellSize * 10;
var snakeY = cellSize * 10;

// food positions (x , y)
var foodX = cellSize * 5;
var foodY = cellSize * 5;

// snake body positions (x , y ) to make the snake change directions
var posX = 0;
var posY = 0;

// container to hold the food to make the snake grow
var snakeBody = [];

// boolean variable to controll the game loop
var gameOver = false;



// load the page 
window.onload = function(){
    // get the canvas from document
    canvas = document.getElementById("My_canvas");

    // set canvas width
    canvas.width = cellSize * columns;

    // set canvas height 
    canvas.height = cellSize * rows;

    // get tool from canvas
    tools = canvas.getContext("2d");

    // call place food function
    placeFood();

    // call change direction
    document.addEventListener("keydown" , changeDirection);

    // call function update
    // update();
    setInterval(update , 1000 / 10);

}


// update function to make changes in page 
function update(){
    // controll the loop
    if(gameOver){
        return;
    }

    // set style 
    tools.fillStyle = "black";
    tools.fillRect(0 , 0 , canvas.width , canvas.height);

    // set style for food
    tools.fillStyle = "brown";
    tools.fillRect(foodX , foodY , cellSize , cellSize);

    // check if the snake ate the food
    if(snakeX == foodX && snakeY == foodY){
        // increase snake body
        snakeBody.push([foodX , foodY]);

        // increase score by one
        score ++

        // change the food position
        placeFood();
    }

    // display score board
    tools.fillStyle = "#67c367";
    tools.fillText("Score: " + score , 10 , 20);

    // tell the sanke body pieces : every piece follow the piece that has the greater index
    for( var i = snakeBody.length - 1; i > 0; i --){
        snakeBody[i] = snakeBody[ i - 1 ];
    } 

    // make the maestro that every piece must follow its
    if(snakeBody.length){
        snakeBody[0] = [snakeX , snakeY];
    } 

    // let the snake move
    snakeX += posX * cellSize;
    snakeY += posY * cellSize;

    // set style for snake
    tools.fillStyle = "white";
    tools.fillRect(snakeX , snakeY , cellSize , cellSize);


    // draw the snake body 
    for(var i = 0; i < snakeBody.length; i ++){
        tools.fillRect(snakeBody[i][0] , snakeBody[i][1] , cellSize , cellSize);
    }


    // check if hit the wall
    if(snakeX < 0 || snakeX >= cellSize * columns || snakeY < 0 || snakeY >= cellSize * rows){
        gameOver = true;
        alert("loOoser 💔🩺💔 ");
    }

    // check if hit it self
    for(var i = 0; i < snakeBody.length; i ++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
            alert("loOoser 💔🩺💔 ");
        }
    }
}



// function for change the food position
function placeFood(){
    // x >> position 
    foodX = Math.floor(Math.random() * columns) * cellSize;
    // y >> postion
    foodY = Math.floor(Math.random() * rows) * cellSize;
}


// function for change snake directions (up , down . right , left)
function changeDirection(e){
    // up
    if(e.code == "ArrowUp" && posY != 1){
        posX = 0;
        posY = -1;
    }

    // down
    else if(e.code == "ArrowDown" && posY != -1){
        posX = 0;
        posY = 1;
    }

    // right
    else if(e.code == "ArrowRight" && posX != -1){
        posX = 1;
        posY = 0;
    }

    // left
    else if(e.code == "ArrowLeft" && posX != 1){
        posX = -1;
        posY = 0;
    }
}