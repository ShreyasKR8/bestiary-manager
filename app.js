require("dotenv").config();
const express = require("express");
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');
const monsterTypeRoutes = require("./routes/monsterTypeRoutes");
const monsterRoutes = require("./routes/monsterRoutes");
const methodOverride = require("method-override");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

//set up ejs view engine and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});

app.use('/', indexRouter);
app.use('/monster-types', monsterTypeRoutes);
app.use('/monsters', monsterRoutes);

