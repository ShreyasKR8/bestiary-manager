require("dotenv").config();
const express = require("express");
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');

const app = express();
const PORT = 3000;

//set up ejs view engine and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});

app.use('/', indexRouter);

// Display monsters of selected category - need to embed monstertype id in index.ejs....