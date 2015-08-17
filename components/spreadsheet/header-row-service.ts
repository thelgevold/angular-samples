export class HeaderRowService{

    static createHeader(length:Number){
        const alpha = 'abcdefghijklmnopqrstuvwxyz';

        let headerLength = 1;

        let header = [];

        for(let i = 0; i < length; i++){
            header.push(alpha.substr(i,headerLength));

            if(i === alpha.length){
                headerLength++;
            }
        }

        return header;
    }

}