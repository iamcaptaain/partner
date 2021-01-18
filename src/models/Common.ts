import { json } from "body-parser";

class returnObject{

    private error : boolean;
    private data  : Object;
    private message  : String

    constructor(error:boolean,data:Object,message:String){
        this.error = error;
        this.data = data;
        this.message = message;
    }
    getError():boolean{
        return this.error ;
    }

    getData(){
        return this.data ;
    }
    getMessage(){
        return this.message ;
    }
    toJSON(){
        return {
            error:this.error,
            data:this.data,
            message:this.message
        }
    }

}

export {returnObject}