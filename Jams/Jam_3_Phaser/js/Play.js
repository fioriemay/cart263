class Play extends Phaser.Scene{

    constructor(){

        super({

            key: 'play'
        });
    }

    create(){

        //adding the sky background to the scene
        this.add.image(400, 300, 'sky');
    }

    update(){

        
    }
}
