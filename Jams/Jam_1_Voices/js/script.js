/**
Ready Set Go
By Fiorie Rousselot-Barbe

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//listens to user's voice
let userVoice = new p5.SpeechRec();

//using states to go between title screen and game
let state = 'title'; // can be : title, simulation

let goalSquare = {

    x: 30,
    y: 30,
    size: 75,
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