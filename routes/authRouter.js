const { Router } = require("express");
const passport = require("passport");

const authController = require("../controllers/authController");

const authRouter = Router();

authRouter.get("/register", authController.registerGet);

authRouter.post("/register", authController.registerPost);

authRouter.get("/login", authController.loginGet);

authRouter.post("/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/auth/login",
    })
);

authRouter.get("/logout", authController.logoutGet);

module.exports = authRouter;