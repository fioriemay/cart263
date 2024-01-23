/**
Where is Sausage Dog
Fiorie Rousselot-Barbe

Followed the week 1 Activity
*/

"use strict";

//number of animal pics
const NUM_ANIMAL_IMAGES = 10;
//number of animals
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

function preload() {

    for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
        let animalImage = loadImage('assets/images/animal${i}.png');
        animalImages.push(animalImage);

    }

    sausageDogImage = loadImage('assets/images/sausage-dog.png');

}



function setup() {
createCanvas(windowWidth, windowHeight);

for(let i = 0; i< NUM_ANIMALS; i++){

    let x = random(0, width);
    let y = random (0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);

}

    let x = random(0, width);
    let y = random (0, height);
    sausageDog = new SausageDog(x, y, sausageDogImage);

}



function draw() {
background (255, 255, 0);

for (let i = 0; i < animals.length; i++){

    animals[i].update();

}

sausageDog.update();

}

function mousePressed(){

    sausageDog.mousePressed();
}