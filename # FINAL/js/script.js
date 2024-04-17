/**
Mochi Dress-Up
by Fiorie Rousselot-Barbe

In this game, you must help Mochi pick an outfit for her day.
Use voice commands to describe an outfit to Mochi.
Use adjectives that describe the vibe of the outfit rather than exact specifics. Mochi has her own sense of style and does not like
being told what to do.
(E.g.: "Wear something warm!", "Wear something cozy!", "Wear something cute!")

*/

"use strict";

//new speechRec to hear the user's voice
let userVoice = new p5.SpeechRec();

//speech synthesizer
const computerVoice = new p5.Speech();


//to determine the string and the user input
let currentSpeech;

//using states to go between the title screen, game instructions and the simulation itself
let state = 'title'; // can be : title, instructions, simulation.

//declaring the random variable that determines the scenario
let randomScenario;
let scenarioChoice;

//declaring image variables

let catScene;
let warmOutfit;


function preload() {

    //will load the images here!!
    // variable = loadImage('assets/images/IMAGE.png');

    catScene = loadImage('assets/images/catBG.png');
    warmOutfit = loadImage('assets/images/warmoutfit.png');

    
}



function setup() {

    //creating our canvas
    createCanvas(500, 500);

    //we are making the voice input continuous
    //and letting it start in setup
    //onresult tba!!
   // userVoice.onResult = //;
    userVoice.continuous = true;
    userVoice.start();

    //picking a random scenario (see chooseScenario function for more)
    randomScenario = [1,2,3];
    scenarioChoice = random(randomScenario);

    //console.log(computerVoice.listVoices());
    computerVoice.setPitch(1.17);
    computerVoice.setRate(1);
    computerVoice.setVoice('Google UK English Female');
    
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
    text('Mochi Dress-Up', width/2, 200);
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
    
    background(catScene);

    //fill(255, 255, 255);
    //text(mouseX + ","+ mouseY, 20, 20);

    chooseScenario();
    pickOutfit();
    
    

}

function chooseScenario(){


    if(scenarioChoice == 1){

        //had to change the spelling of Mochi for voice to pronounce it correctly
        computerVoice.speak('Moh-chi is going to get a latte. It is cold outside.');
        //we set the number as 5 so that the voice does not loop
        scenarioChoice =5;

    }

    else if(scenarioChoice == 2){

        computerVoice.speak('Moh-chi is going shopping with her friends. It is warm outside.');
        //we set the number as 5 so that the voice does not loop
        scenarioChoice =5;

    }

    else if(scenarioChoice ==3){
        
        computerVoice.speak('Moh-chi is going to class. She just woke up and is tired.');
        //we set the number as 5 so that the voice does not loop
        scenarioChoice =5;

    }

    
}

function pickOutfit(){

    currentSpeech = userVoice.resultString;
    //console.log(currentSpeech);

    if (!currentSpeech) {
    
        return;
      }

      // WARM outfit
    else if (currentSpeech.includes("warm")) {
        console.log(currentSpeech);
        image(warmOutfit,0,0);
     }

     // COZY outfit

     // CUTE outfit

     // COMFY outfit

     // EFFORTLESS outfit

     // COOL outfit

     // CASUAL outfit
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