import { Response, Request, NextFunction } from "express"


const home = (req:Request,res:Response) =>{
    res.render('loginn')
}
const _register = (req:Request,res:Response) =>{

    res.render('registration')
}

export {home, _register}