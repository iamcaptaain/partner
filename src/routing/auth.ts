import { Response, Request, NextFunction } from "express"

import * as jwt from 'jsonwebtoken'
import { nextTick } from "process"

export default function (req:Request,res:Response,nxt:NextFunction) {
    const auth_token = req.header('user-token')
    if(!auth_token) return res.render('loginn')
    try{
        const _true = jwt.verify(auth_token, process.env.ACCESS_TOKEN)
        req.body = _true
        nxt()
    }catch(err){
        res.send("Acess denied")
    }
}