
export class Clock {

    time:string;

    onInit(){
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        },1000);
    }
}


