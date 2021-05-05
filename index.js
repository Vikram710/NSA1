const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render("index");
})

app.post('/login', (req,res) => {    
    res.send("SENT");
})

app.listen(3000, () => {
    console.log("port 3000")
})