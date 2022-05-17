import express from 'express'
import mainRouter from './src/routes/mainRouter';
import config from 'config'
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.set("view engine", "ejs");
app.use('/shows',mainRouter)
app.use('/',mainRouter)

app.listen(8080, ()=>{console.log(`listening on ${config.get('HOST')}${config.get('PORT')}`)})