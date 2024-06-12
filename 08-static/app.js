const express =require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views') 
app.unsubscribe(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT,() => {
    console.log(`http://localhost:8000`)
})