const { Router } = require('express');
const monsterTypeController = require('../controllers/monsterTypeController');

const monsterTypeRouter = Router();

monsterTypeRouter.get('/new', monsterTypeController.getAddMonsterTypeForm);

monsterTypeRouter.post('/new', monsterTypeController.createMonsterType)

module.exports = monsterTypeRouter;