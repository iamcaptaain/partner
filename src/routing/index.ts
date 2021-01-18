import { Router, Response, Request } from "express"
import bodyParser from "body-parser"
import { registerPartner, showParterns, partnerLogin, logout } from '../controller/PartnerController'
import Upload from "../controller/multer"
import dotenv from 'dotenv'
import auth from './auth'
import {home, _register } from "../controller/home"


dotenv.config()
const router:Router = Router()
router.use(bodyParser.urlencoded({ extended: true}))
router.use(bodyParser.json())

router.get('/',auth,home)
router.get('/register', _register)
router.post('/partner/register', Upload.single('images'), registerPartner,)
router.post('/partner/login', partnerLogin)
router.get('/partner/list',auth, showParterns)

router.get('/logout', logout)


export default router