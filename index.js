const express = require("express");
// const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = 5700;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));

var list = [];
// list.map(()=>{

// })
var count;

app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.get('/add.ejs', (req, res)=>{
    res.render('add.ejs');
})
app.post('/add.ejs', (req, res)=>{
    let {name} = req.body;
    list.push({name, count: 1});
    res.redirect('add.ejs');
})

app.get('/all.ejs', (req, res)=>{
    // console.log(list);
    res.render('all.ejs', {list});
})

app.post('/plus', (req, res)=>{
    let {index} = req.body;
    var found = list.at(index);
    found.count += 1;
    res.redirect('all.ejs');
})

app.post('/-', (req, res)=>{
    let {index} = req.body;
    var found = list.at(index);
    found.count -= 1;
    if (!found.count) {
        let retain = list.filter((value, ind)=> (index!= ind));
        list = retain;
    }
    res.redirect('all.ejs');
})

app.post('/del', (req, res)=>{
    let {index} = req.body;
    let retain = list.filter((value, ind)=> (index!= ind));
    list = retain;
    res.redirect('all.ejs');
})

// app.get('/all.ejs/:id', (req, res)=>{
//     let {id} = req.params;
//     if (id.toString().includes('+')) {
//         let index = id.search(RegExp('+'))
//     } else {
        
//     }
//     console.log(id);
//     res.render('all.ejs', {list});

// })

// document.getElementById("addName").addEventListener("click", ()=>{
//     alert(33266);
// })

app.listen(port, ()=>{
    console.log(
        `i am listening at ${port}`
    );
})