import express, { Express } from 'express'
import mongoose from 'mongoose'
import router from './routing/index'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'

const PORT: string| number = process.env.PORT || 80

const app: Express  = express();
app.use(cors())
app.use(router)
app.use(cookieParser())
app.set("views",path.join(__dirname,"views"))
app.set('view engine', 'ejs')

const uri: string = `mongodb://localhost:27017/messages`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
