/**
Panda Dress up game Prototype
by Fiorie Rousselot-Barbe

Prototype

*/

"use strict";

//new speechRec to hear the user's voice
let userVoice = new p5.SpeechRec();

//to determine the string and the user input
let currentSpeech;

//using states to go between the title screen, game instructions and the simulation itself
let state = 'title'; // can be : title, instructions, simulation.

function preload() {

    //will load the images here!!
}



function setup() {

    //creating our canvas
    createCanvas(500, 500);

    //we are making the voice input continuous
    //and letting it start in setup
    //onresult tba!!
    userVoice.onResult = //;
    userVoice.continuous = true;
    userVoice.start();
}



function draw() {
//setting states, used for title screen/end/simulation

if(state === 'title'){

    title();

}

else if (state === 'instructions'){

    instructions();

}

else if (state === 'simulation'){

    simulation();

}


}

//title state
function title(){

    push();
    background(232, 160, 190);
    textSize(48);
    fill(230, 209, 232);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Panda Dress-Up', width/2, 200);
    textSize(30);
    text('Click to Play!', width/2, 250);
    textStyle(NORMAL);
    textSize(25);
    pop();

}

//how to play/game instructions state
function instructions(){
    push();
    background(232, 160, 190);
    textSize(48);
    fill(230, 209, 232);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Instructions', width/2, 200);
    textSize(30);
    text('tba', width/2, 250);
    textStyle(NORMAL);
    textSize(25);
    pop();

}

//game state
function simulation(){

    currentSpeech = userVoice.resultString;

    //graphics will be imported here
    // will most likely use a switch statement to display
    // the different clothes depending on user input
    // circle used as placeholder
    background(189, 158, 222);

    noStroke();
    fill(0,0,0);
    circle(width/2, height/2, 200);

}

//if the user presses the mouse button
function mousePressed(){

    // moving through states when the user presses the mouse

    if (state === 'title') {

        state = 'instructions';

    }

    else if(state === 'instructions'){

        state = 'simulation';
    }


}