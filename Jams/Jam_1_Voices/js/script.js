/**
Drunk Driving
By Fiorie Rousselot-Barbe

DESCRIPTION
*/

"use strict";

//listens to user's voice
let userVoice = new p5.SpeechRec();
let currentCommand;

//speech synthesizer will say where the car is actually going
const computerVoice = new p5.Speech();

//using states to go between title screen and game
let state = 'title'; // can be : title, simulation, end.

let userCar = {

    x:80,
    y:80,
    size:45,
    r:222,
    g:107,
    b:0,
    ap:undefined,


}

let goalSquare = {

    x: undefined,
    y: undefined,
    size: 60,
    r:94,
    g:17,
    b:17,

}

function preload() {

userCar.ap = loadImage('assets/images/carpng.png');

}



function setup() {

    //canvas dimensions
    createCanvas(500, 500);

    userVoice.onResult = moveUser;
    userVoice.continuous = true;
    userVoice.start();

    setGoal();
}



function draw() {

    //setting states
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

    goalSquare.x = random(50,450);
    goalSquare.y = random(50,450);

}

function title(){

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
    
    background(161, 197, 255);
    
    displayGoal();
    
    //we move user via the voice input's onResult
    displayUser();
    checkOverlap();

}

function gameEnd(){
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
   
       
    switch(currentCommand){
        case "down": //left goes down
            userCar.y = userCar.y + 14;
            //computerVoice.speak('down');
            
        break;
        case "up": //right goes up
            userCar.y = userCar.y - 14;
        break;
        case "left": //up goes left
            userCar.x = userCar.x - 14;
        break;
        case "right": //down goes right
            userCar.x = userCar.x + 14;
        break;

    }

    

}

function checkOverlap(){

    let d = dist(userCar.x, userCar.y, goalSquare.x, goalSquare.y);
    if (d < userCar.size + 10){

        state ='end';
        //console.log(d);

    }
}

function displayUser(){

    noStroke();
    fill(userCar.r, userCar.g, userCar.b);
    //circle(userCar.x, userCar.y, userCar.size);
    image(userCar.ap, userCar.x, userCar.y, 50, 50);
    
}

