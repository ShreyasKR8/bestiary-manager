const { Router } = require("express");
const userController = require('../controllers/userController');

const indexRouter = Router();

indexRouter.get('/', userController.showHomePage);

module.exports = indexRouter;