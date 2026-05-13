require("dotenv").config();
require("./config/passport");
const express = require("express");
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');
const monsterTypeRoutes = require("./routes/monsterTypeRoutes");
const monsterRoutes = require("./routes/monsterRoutes");
const methodOverride = require("method-override");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const passport = require("passport");
const authRouter = require("./routes/authRouter");
const pool = require('./db/pool');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(
    session({
        store: new pgSession({
            pool: pool,
            tableName: "user_sessions",
            createTableIfMissing: true,
        }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

//set up ejs view engine and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});

app.use('/', indexRouter);
app.use('/monster-types', monsterTypeRoutes);
app.use('/monsters', monsterRoutes);
app.use('/auth', authRouter);
