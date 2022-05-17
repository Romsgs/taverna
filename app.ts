import express from 'express'
import mainRouter from './src/routes/mainRouter';

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.set("view engine", "ejs");
app.use('/shows',mainRouter)

app.listen(3000, ()=>{console.log('listening on 3000')})