const bcrypt = require("bcryptjs");
const db = require("../db/pool");

exports.registerGet = (req, res) => {
    res.render("auth/register-form");
};

exports.registerPost = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );

        await db.query(
            `
      INSERT INTO users(username, email, password_hash)
      VALUES($1, $2, $3)
      `,
            [
                req.body.username,
                req.body.email,
                hashedPassword,
            ]
        );

        res.redirect("/auth/login");
    } catch (err) {
        next(err);
    }
};

exports.loginGet = (req, res) => {
    res.render("auth/login-form");
};

exports.logoutGet = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        res.redirect("/");
    });
};