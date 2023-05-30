const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6969;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    if (categoryId === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === categoryId);
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})