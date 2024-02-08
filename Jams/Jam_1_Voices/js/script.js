/**
Drunk Driving
By Fiorie Rousselot-Barbe

notes:
switch statement for voice, maze example (examples channel)
monday 1-3 office hours wednesday 3-5 stphn
*/

"use strict";

//listens to user's voice
let userVoice = new p5.SpeechRec();

//using states to go between title screen and game
let state = 'simulation'; // can be : title, simulation, end.

let userCar = {

    x:100,
    y:200,
    size:45,
    r:222,
    g:107,
    b:0,

}

let goalSquare = {

    x: 30,
    y: 30,
    size: 60,
    r:94,
    g:17,
    b:17,

}

function preload() {

}



function setup() {

    //canvas dimensions
    createCanvas(500, 500);

    userVoice.onResult = printResult;
    userVoice.continuous = true;
    userVoice.start();
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

function printResult(){
    
    if (userVoice.resultValue === true) {
        
        console.log(userVoice.resultString);

}

}

function title(){

    push();
    background(161, 197, 255);
    textSize(64);
    fill(56, 94, 59);
    textAlign(CENTER, CENTER);
    text('Click to Play!', width/2, height/2);
    pop();
}

function simulation(){
    
    background(161, 197, 255);
    
    displayGoal();
    displayUser();

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

function displayUser(){

    noStroke();
    fill(userCar.r, userCar.g, userCar.b);
    circle(userCar.x, userCar.y, userCar.size);
}