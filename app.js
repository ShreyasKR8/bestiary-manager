require("dotenv").config();
const express = require("express");
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');
const monsterTypeRoutes = require("./routes/monsterTypeRoutes");
const monsterRoutes = require("./routes/monsterRoutes");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

//set up ejs view engine and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});

app.use('/', indexRouter);
app.use('/monster-types', monsterTypeRoutes);
app.use('/monsters', monsterRoutes);

