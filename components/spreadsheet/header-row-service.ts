export class HeaderRowService{

    static createHeader(length:Number){
        const alpha = 'abcdefghijklmnopqrstuvwxyz';

        let headerLength = 1;

        let header = [];

        let prefix = '';

        let pass = 0;

        let charCounter = 0;

        for(let i = 0; i < length; i++){

            if(charCounter === alpha.length){
                prefix += alpha.substr(pass,1);
                charCounter = 0;
            }

            header.push(prefix + alpha.substr(charCounter,headerLength));

            charCounter++;
        }

        return header;
    }

}