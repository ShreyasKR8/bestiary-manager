const { Router } = require("express");
const userController = require('../controllers/userController');

const indexRouter = Router();

indexRouter.get('/', userController.showHomePage);

indexRouter.get('/category/:typeId', userController.showCategory);

module.exports = indexRouter;