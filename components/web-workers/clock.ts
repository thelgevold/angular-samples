
export class Clock {

    time:string;

    onInit(){
        this.time = new Date().toLocaleTimeString();
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        },1000);
    }
}


