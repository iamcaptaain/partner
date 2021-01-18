
import { Response, Request, NextFunction } from "express"
import { returnObject } from "../models/Common"
import PartnerSchema from "../models/Partner"
import CounterSchema from '../models/ApiCounter'
import * as jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
import { userInfo } from "os"


// Partner Registration
const registerPartner = async (req: Request, res: Response) => {
    // check retendecy of Partner
    const check = await PartnerSchema.findOne({ contact: req.body.phone })
    if (check) return res.status(500).send("Partner already Registered")

    try {
        if (req.body.password == req.body.pass) {
            const hashpass = await bcrypt.hash(req.body.password, 10)
            const partner = new PartnerSchema({
                name: req.body.name,
                contact: req.body.phone,
                join_date: Date.now(),
                password: hashpass,
                imageURl: req.file,
            })

            let _new = await partner.save()
            // api view
            // res.status(200).json({
            //     partner: partner.id,
            //     message: "Added",
            // })

            // template view
            res.redirect('/')
        } else {
            res.status(400).json({
                messages: "Please enter same password",
            })
        }
    } catch (err) {
        res.status(500).send()
    }
}

//Partner list Api
const showParterns = async (req: Request, res: Response)=> {
    const _data = await PartnerSchema.find()
    res.status(201).json({
        data: _data,
        message: "Hello these",
    })
}


//Login Api
const partnerLogin = async (req: Request, res: Response) => {

    // Check for partner is registered
    const { contact, password } = req.body
    const partner = await PartnerSchema.findOne({ contact })
    if (!partner) return res.status(500).send("Partner is not Registered")

    try {
        let vailidPass = await bcrypt.compare(password, partner.password)
        if (!vailidPass) return res.send("Incorect login credential")
        const authtoken = jwt.sign({userid:partner._id},process.env.ACCESS_TOKEN)
        res.cookie('user-token',authtoken,{ httpOnly:true ,maxAge: 12 * 1000, sameSite:'lax'})
    
        console.log(authtoken)
        res.redirect('admin')
    } catch (error) {
        res.status(404).send("Server Issue")
    }

}


const logout = (req: Request, res: Response)=>{
    res.cookie('user-token','',{maxAge:1})
    res.render('loginn')
}


export { registerPartner, showParterns, partnerLogin, logout }
