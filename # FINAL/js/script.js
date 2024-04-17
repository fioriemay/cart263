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
let comfyOutfit;
let coolOutfit;
let cozyOutfit;
let cuteOutfit;
let effortlessOutfit;
let casualOutfit;

let titleScreen;
let instructionPage;


function preload() {

    // loading the images for the scene and the outfits
    //all outfits/assets hand-drawn and cut into PNG's
    catScene = loadImage('assets/images/catBG.png');
    warmOutfit = loadImage('assets/images/warmoutfit.png');
    comfyOutfit = loadImage('assets/images/comfyoutfit.png');
    coolOutfit = loadImage('assets/images/cooloutfit.png');
    cozyOutfit = loadImage('assets/images/cozyoutfit.png');
    cuteOutfit = loadImage('assets/images/cuteoutfit.png');
    effortlessOutfit = loadImage('assets/images/effortlessoutfit.png');
    casualOutfit = loadImage('assets/images/casualoutfit.png');

    titleScreen = loadImage('assets/images/mochititle.png');
    instructionPage = loadImage('assets/images/instructionpage.png');

    
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

    image(titleScreen,0,0);

}

//how to play/game instructions state
function instructions(){
    
    image(instructionPage,0,0);

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
        computerVoice.speak('Moh-chi is going to get a latte.');
        //we set the number as 5 so that the voice does not loop
        scenarioChoice =5;

    }

    else if(scenarioChoice == 2){

        computerVoice.speak('Moh-chi is going shopping with her friends.');
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
    else if (currentSpeech.includes("warm") || currentSpeech.includes("toasty") || currentSpeech.includes("scarf") || currentSpeech.includes("puffer")) {
        console.log(currentSpeech);
        image(warmOutfit,0,0);
     }

     // COZY outfit

     else if (currentSpeech.includes("cozy") || currentSpeech.includes("snug") || currentSpeech.includes("homey") || currentSpeech.includes("modest")) {
        console.log(currentSpeech);
        image(cozyOutfit,0,0);
     }

     // CUTE outfit

     else if (currentSpeech.includes("cute") || currentSpeech.includes("sweet") || currentSpeech.includes("adorable") || currentSpeech.includes("girly") || currentSpeech.includes("lolita")) {
        console.log(currentSpeech);
        image(cuteOutfit,0,0);
     }

     // COMFY outfit

     else if (currentSpeech.includes("comfortable") || currentSpeech.includes("relax") || currentSpeech.includes("convenient") ||currentSpeech.includes("easy") || currentSpeech.includes("comfy") || currentSpeech.includes("laid-back")) {
        console.log(currentSpeech);
        image(comfyOutfit,0,0);
     }

     // EFFORTLESS outfit

     else if (currentSpeech.includes("effortless") || currentSpeech.includes("classic") || currentSpeech.includes("chic") || currentSpeech.includes("elegant") ) {
        console.log(currentSpeech);
        image(effortlessOutfit,0,0);
     }

     // COOL outfit

     else if (currentSpeech.includes("cool") || currentSpeech.includes("trendy") || currentSpeech.includes("loose") ||currentSpeech.includes("long skirt") || currentSpeech.includes("flowy")) {
        console.log(currentSpeech);
        image(coolOutfit,0,0);
     }

     // CASUAL outfit

     else if (currentSpeech.includes("casual") || currentSpeech.includes("simple") || currentSpeech.includes("cargo pants") || currentSpeech.includes("tank")) {
        console.log(currentSpeech);
        image(casualOutfit,0,0);
     }
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