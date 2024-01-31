/**
Jam 1
Fiorie Rousselot-Barbe / 40177306

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let recognizer = new p5.SpeechRec();

function preload() {

}



function setup() {

    recognizer.onResult = handleResult;
    recognizer.continuous = true;
    recognizer.start();
    

}



function draw() {

}

function mousePressed(){

   
}

function handleResult(){

    if (recognizer.resultValue === true) {
        
        console.log(recognizer.resultString);

}
}