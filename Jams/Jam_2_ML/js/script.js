/**
Talk to me
Fiorie Rousselot-Barbe

Tell the computer a sentence about your day, it will judge whether it is a good or bad day.
*/

"use strict";

// our variable to initialize sentiment
let sentiment;

// to listen to user input
let userVoice = new p5.SpeechRec();

//to tell the user how their day went
const computerVoice = new p5.Speech();

//state can be title or simulation
let state = 'simulation';

function preload() {

}



function setup() {

    //initializing sentiment
    sentiment = ml5.sentiment('movieReviews', modelReady);

    //initializing voice input
    userVoice.onResult = logResult;
    userVoice.continuous = true;
    userVoice.start();

    //canvas setup
    createCanvas(500, 500);
}



function draw() {
    
}



////------debug functions------////

function logResult(){

    if (userVoice.resultValue === true) {
        
        console.log(userVoice.resultString);

}

}


function modelReady() {
    //callback function to confirm that sentiment was properly initialized
    console.log('Model Ready!');
  }