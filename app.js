const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
//app.use ( express.static( path.join(__dirname, './public')));
app.listen(3030, () => console.log('Levantando un servidor con Express')) ;
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
//app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/views/home.html'));});