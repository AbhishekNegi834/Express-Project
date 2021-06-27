const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

//Public static path
const staticPath = path.join(__dirname,'../public');
//Paths
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

//for dynamic website
app.set('view engine','hbs');
app.set('views',viewsPath);
//for partials
hbs.registerPartials(partialsPath);
//for static website
app.use(express.static(staticPath));


//Routing
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.render('weather');
});

app.get('/comingsoon',(req,res)=>{
    res.render('comingsoon');
});

app.get('*',(req,res)=>{
    res.render('404page');
});


app.listen(port,()=>{
  console.log(`Listening to ${port}`);
});