export class KeyMap{

    static getNavigationDirection(keyCode) : KeyDirection{

        let direction = new KeyDirection();
        if(keyCode === 38){
            direction.up = true;
        }

        if(keyCode === 40){
            direction.down = true;
        }

        if(keyCode === 39){
            direction.right = true;
        }

        if(keyCode === 37){
            direction.left = true;
        }

        return direction;
    }

}

class KeyDirection{
    up:Boolean;
    left:Boolean;
    right:Boolean;
    down:Boolean;
}