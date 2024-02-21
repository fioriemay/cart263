/**
Talk to me
Fiorie Rousselot-Barbe

Tell the computer a sentence about your day, it will judge whether it is a good or bad day.
The computer judges in its own way, and might see things differently than you do. Have fun!
*/

"use strict";

// our variable to initialize sentiment
let sentiment;

// to listen to user input
let userVoice = new p5.SpeechRec();

//to tell the user how their day went
const computerVoice = new p5.Speech();

//state can be title or simulation
let state = 'title';

function preload() {

}



function setup() {

    //initializing sentiment
    sentiment = ml5.sentiment('movieReviews', modelReady);

    //initializing voice input
    userVoice.onResult = getSentimentVal;
    userVoice.continuous = true;
    userVoice.start();

    //canvas setup
    createCanvas(500, 500);
}



function draw() {

    //states for title screen and simulation
    if(state === 'title'){

        title();

    }

    else if (state === 'simulation'){

        simulation();

    }
    
}

function title(){

    push();
    background(93, 62, 122);
    textSize(48);
    fill(10, 4, 15);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Rate my day!', width/2, 200);
    textSize(30);
    text('Click to Begin!', width/2, 460);
    textStyle(NORMAL);
    textSize(25);
    text('Tell the computer a sentence about your day,', width/2, 240);
    text('It will judge whether it is a good or bad day.', width/2, 260);
    pop();

}

function simulation(){

    push();
    background(93, 62, 122);
    textSize(48);
    fill(10, 4, 15);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('test', width/2, 200);
   
    getSentimentVal();

}

function getSentimentVal(){

    //what the user says goes into this constant variable
    const inputText = userVoice.resultString;
    //if the user speaks, the console logs what they said
    if (userVoice.resultValue === true) {
        
                console.log(inputText);
        
         }

    //the numerical value created by sentiment, based off of what the user said.
    const judgement = sentiment.predict(inputText);
    //we also log the value sentiment gave to the user's input
    console.log(judgement);
}

function mousePressed(){

    //if user cliks on the title screen, the simulation will begin
    if (state === 'title') {

        state = 'simulation';

    }
}


////------debug functions------////

// function logResult(){

//     //used to make sure voice input worked properly
//     if (userVoice.resultValue === true) {
        
//         console.log(userVoice.resultString);

// }

// }


function modelReady() {
    //callback function to confirm that sentiment was properly initialized
    console.log('Model Ready!');
  }