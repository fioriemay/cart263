/**
Drunk Driving
By Fiorie Rousselot-Barbe

You had a few drinks before driving your car back home(And you shouldn't have).
Driving under the influence of alcohol is a terrible idea -- But thanfully this is just a simulation!
Try driving the car back home (If you get too confused, you can sober up by looking at the comments in the switch statement far below)
*/

"use strict";

//listens to user's voice
let userVoice = new p5.SpeechRec();
let currentCommand;

//speech synthesizer will say where the car is actually going
const computerVoice = new p5.Speech();

//using states to go between title screen and game
let state = 'title'; // can be : title, simulation, end.

//user's car, ap = appearance (used for loadimage)
let userCar = {

    x:80,
    y:80,
    size:45,
    r:222,
    g:107,
    b:0,
    ap:undefined,


}

//home coordinates / goal, x and y left undefined so we can randomize them
let goalSquare = {

    x: undefined,
    y: undefined,
    size: 60,
    r:94,
    g:17,
    b:17,

}

function preload() {

    //loading the car's image (hand drawn myself)
userCar.ap = loadImage('assets/images/carpng.png');

}



function setup() {

    //canvas dimensions
    createCanvas(500, 500);

    userVoice.onResult = moveUser;
    userVoice.continuous = true;
    userVoice.start();

    //calling this function which randomizes the goal's coordinates
    setGoal();
}



function draw() {

    //setting states, used for title screen/end/simulation
    if(state === 'title'){

        title();

    }

    else if (state === 'simulation'){

        simulation();

    }
    else if (state === 'end'){

        gameEnd();

    }
}

function setGoal(){

    // randomizing the goal's coordinates somewhere in the canvas that makes sense (we dont want it on the complete edge)
    goalSquare.x = random(50,450);
    goalSquare.y = random(50,450);

}

function title(){

    //title screen, played around with text styles and coordinates
    push();
    background(161, 197, 255);
    textSize(48);
    fill(56, 94, 59);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Drunk Driving', width/2, 200);
    textSize(30);
    text('Click to Play!', width/2, 460);
    textStyle(NORMAL);
    textSize(25);
    text('Try using voice command ', width/2, 240);
    text('to tell the car where to go!', width/2, 260);
    text('Up,Down,Left,Right', width/2, 325);
    pop();
}

function simulation(){
    
    //our simulation, we call display functions and check overlap to determine if the game should end
    background(161, 197, 255);
    
    displayGoal();
    
    //we move user via the voice input's onResult so no need to call moveUser
    displayUser();
    checkOverlap();

}

function gameEnd(){
    // game end screen
    push();
    background(161, 197, 255);
    textSize(64);
    fill(56, 94, 59);
    textAlign(CENTER, CENTER);
    text('home safe!', width/2, height/2);
    textSize(28);
    text('dont drink and drive!', width/2, 300);
    pop();

}

function mousePressed(){

    //if user clicks to play, game goes from title to simulation
    if (state === 'title') {

        state = 'simulation';

    }
    
}

function displayGoal(){

    noStroke();
    fill(goalSquare.r, goalSquare.g, goalSquare.b);
    square(goalSquare.x, goalSquare.y, goalSquare.size);
}

function moveUser(){
    
    currentCommand = userVoice.resultString;
   //current command = what the user just commanded to the car
       
   //the "drunk driving" commands, computer will repeat the actual direction you are going to you
    switch(currentCommand){
        case "down": //say down go right
            userCar.x = userCar.x + 14;
            computerVoice.speak('right');
            console.log(currentCommand);
            
        break;
        case "up": //say up go left
            userCar.x = userCar.x - 14;
            computerVoice.speak('left');
            console.log(currentCommand);
        break;
        case "left": //say left go down
            userCar.y = userCar.y + 14;
            computerVoice.speak('down');
            console.log(currentCommand);
        break;
        case "right": //say right go up
            userCar.y = userCar.y - 14;
            computerVoice.speak('up');
            console.log(currentCommand);
        break;

    }

    

}

function checkOverlap(){

    //using dist to check for overlap between the car and the goal
    //if both overlap (the player made it to the end of the game), the game ends.
    let d = dist(userCar.x, userCar.y, goalSquare.x, goalSquare.y);
    if (d < userCar.size + 10){

        state ='end';
        //console.log(d);

    }
}

function displayUser(){

    noStroke();
    fill(userCar.r, userCar.g, userCar.b);
    image(userCar.ap, userCar.x, userCar.y, 50, 50);
    
}

