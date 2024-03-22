/**
Bubbles!
Fiorie Rousselot-Barbe

A relaxing, therapeutic experience. As you pop a bubble, imagine your worries going away.
*/

"use strict";

//settings for our world
//default arcade physics, set width and height of the scene, etc
let config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },

    scene: [Boot, Play]
};

//declaring a variable for our game
let game = new Phaser.Game(config);