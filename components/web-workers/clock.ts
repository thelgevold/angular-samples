declare var moment: any;

export class Clock {

    time:string;
    offset:number;

    constructor(offset){
        this.offset = offset;
    }

    ngOnInit(){
        this.time = moment.utc().add(this.offset,'h');
        setInterval(() => {
            this.time = moment.utc().add(this.offset,'h');
        },1000);
    }
}


