
import {model, Schema, Document} from 'mongoose'  
import Partner from './Partner'

interface CounterDoc extends Document{
    user: object,
    date: Date,
    token:string
}

const CounterSchema: Schema = new Schema({
    user:[[Partner]],
    date:{
        type:Date,
        default:Date.now
    },
    token:{
        type:String
    }
}) 
export default model<CounterDoc>("Counter", CounterSchema)