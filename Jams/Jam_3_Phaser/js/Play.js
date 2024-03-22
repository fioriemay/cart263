class Play extends Phaser.Scene{

    constructor(){

        super({

            //our scene's key
            key: 'play'
        });
    }


    create(){

        //adding the sky background to the scene
        this.add.image(400, 300, 'sky');


        //"array" of bubbles, key referencing to the bubble image in boot js
        this.bubbles = this.physics.add.group({
            key: 'bubble',
            quantity: 48,
        });

        // world bounds
        const { x, y, width, height } = this.physics.world.bounds;
        //added a shape which we use to bind to the bubbles
        const shape = new Phaser.Geom.Ellipse(33, 67, 66, 133);

        //constant variable which equals to the sound effect we previously loaded in boot
        //it does not loop because we only want it to play when the user pops a bubble
        const soundfx = this.sound.add('pop', { loop: false });
        //for loop setting position and velocity for each item in the array + contains the onclick command
        for (const bubble of this.bubbles.getChildren())
        {

            //setting the position of the bubbles randomly to begin with
            bubble.setRandomPosition(x, y, width, height);
            //we then give them velocity so they float throughout the screen
            bubble.body.velocity.setToPolar(0.125 * Math.PI, Phaser.Math.FloatBetween(50, 100));

            //binding the previously declared shape to the bubbles to add interactivity
            bubble.setInteractive(shape, Phaser.Geom.Ellipse.Contains);

            //onclick comand for the bubbles
            bubble.on('pointerdown', () => {
        
                //when the user clicks on the bubble, it pops meaning it disappears
                //so we do this by setting the opacity (alpha) to zero.
                bubble.setAlpha([0]);

                //we also play the sound present in soundfx, which is the pop sound we loaded in boot.js
                //we then play it whenever the user pops a bubble
                soundfx.play();

            },this);
        }

       

        //creating a camera in our scene so we can then add effects to it
        const camera = this.cameras.main;

        //camera blur effect, played around with the blur and brightness effects
        camera.postFX.addTiltShift(0.35, 0.15, 0.3);

        //added a vignette effect to the scene
        camera.postFX.addVignette(0.5, 0.5, 1.2);
    }

    update(){

        //updating the bubbles
        this.physics.world.wrap(this.bubbles, 24);
    }
}
