class Animal {
    //animal parameters
constructor (x,y, image) {

    this.x =x;
    this.y = y;
    this.image = image;

    this.angle = 0;

}

//calls display
update (){

    this.display();
}

display(){

    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();

}

}