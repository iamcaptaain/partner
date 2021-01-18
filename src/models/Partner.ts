import {model, Schema, Document} from 'mongoose'


type NewType = Document

interface PartnerDoc extends NewType{

    name:String,
    contact:Number,
    imageUrl:String,
    request_tracker:Number,
    join_date:Date,
    password:String
}



const PartnerSchema:Schema = new Schema({

    name:{
        type:String,
        required:true
    },

    contact:{
        type:Number,
        unique:true,
        required:true,
    },

    imgaeUrl:{
        type: String
    },

    request_tracker:{
        type:Number,
        default:0,
    },

    join_date:{
        type:Date,
        default:Date.now
    },

    last_login:{
        type:Date,
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:256
    }

})


export default model<PartnerDoc>("Partner",PartnerSchema)