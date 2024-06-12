const express =require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views') 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
})
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
})
app.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
})


app.listen(PORT,() => {
    console.log(`http://localhost:8000`)
}) 