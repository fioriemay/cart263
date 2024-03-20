class Play extends Phaser.Scene{

    constructor(){

        super({

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
        const shape = new Phaser.Geom.Ellipse(33, 67, 66, 133);
        //for loop setting position and velocity for each item in the array
        for (const bubble of this.bubbles.getChildren())
        {
            bubble.setRandomPosition(x, y, width, height);
            bubble.body.velocity.setToPolar(0.125 * Math.PI, Phaser.Math.FloatBetween(50, 100));

            bubble.setInteractive(shape, Phaser.Geom.Ellipse.Contains);

            bubble.on('pointerdown', () => {
        
                bubble.setAlpha([0]);
                pop.play();

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

        this.physics.world.wrap(this.bubbles, 24);
    }
}
