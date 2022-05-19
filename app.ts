import express from 'express'
import mainRouter from './src/routes/mainRouter';
import config from 'config'
import router from './src/routes/router';
import bodyParser from 'body-parser';
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))
app.set("view engine", "ejs");
app.use('/shows',mainRouter)
app.use('/',router)

app.listen( (process.env.PORT || 5000), ()=>{console.log(`listening on ${config.get('HOST')}${config.get('PORT')}`)})