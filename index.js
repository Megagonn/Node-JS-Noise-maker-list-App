const express = require("express");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = 5700;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.get('/add.ejs', (req, res)=>{
    res.render('add.ejs')
})

app.get('/all.ejs', (req, res)=>{
    res.render('all.ejs')
})

app.listen(port, ()=>{
    console.log(
        `i am listening at ${port}`
    );
})